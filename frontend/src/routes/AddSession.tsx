import React, { FC, useState, useEffect, CSSProperties } from 'react';
import Bar from './Bar';

import { Link, useNavigate } from "react-router-dom";

import { useCookies } from 'react-cookie';
import APIService from '../APIService';

import Alert from '@mui/material/Alert';
import $ from 'jquery';

import Select, { StylesConfig } from 'react-select';

import moment from 'moment';


type OptionType = {
    label: string;
    value: string;
}

const customControlStyles: CSSProperties = {
    width: '150px',
    borderColor: "#000000",
    color: "#000000",
    marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "10px",
}

const customMenuStyles: CSSProperties = {
    width: '150px',
    color: '#000000',
}

type IsMulti = false

const selectStyle: StylesConfig<OptionType, IsMulti> = {
    control: (provided, state) => {
        return {
          ...provided,
          ...customControlStyles
        }
    },

    menu: (provided, state) => {
        return {
            ...provided,
            ...customMenuStyles
        }
    },
}


const AddSession: FC = () => {
    useEffect(() => {
        $(function() {
            $(".submit__button").on("click", function() {
                $('#new__session').trigger("reset");
                $(".success__message").css("display", "block");
            });
        });
    }, []);

    const [token] = useCookies(['mytoken'])
    let navigate = useNavigate()

    const [userID, setID] = useState<any>([])
    const [specs, setSpecs] = useState<any>([])
    const [options, setOptions] = useState<OptionType[]>([])

    let menteeID = document.location.search.substring(1).split("=")[1]
    const [menteeProfile, setMenteeProfile] = useState<any>([])

    const [date, setDate] = useState('')
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [startTimeVal, setStartTimeVal] = useState<any>([])
    const [endTimeVal, setEndTimeVal] = useState<any>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(menteeID,token['mytoken']).then(resp => {setMenteeProfile(resp)})
        APIService.getSpecialties(token['mytoken']).then(resp => setSpecs(APIService.GetGroupByID(userID,resp,"userID"))).then(() => {
            for (let i = 0; i < specs.length; i++) {
                setOptions(state => [...state, {value : specs[i].topic, label : specs[i].topic}])
            }
        })
    }, [userID])

    const CreateSession = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        var conditions = 0

        var divsToShow = document.getElementsByClassName('error__message') as HTMLCollectionOf<HTMLElement>
        for(var i = 0; i < divsToShow.length; i++){
            divsToShow[i].style.display = "none"
        }
        
        if (!date || !startTimeVal || !endTimeVal || !topic || !description || !location) {
            conditions += 1
            console.log("PLEASE FILL IN ALL DETAILS")
            divsToShow[0].style.display = "block"
        }
        if (conditions == 0) {
            let eventID = 0
            let mentorID = userID
            const start_time = moment(date + ' ' + startTimeVal).format("yyyy-MM-DD[T]HH:mm:SS[Z]")
            const end_time = moment(date + ' ' + endTimeVal).format("yyyy-MM-DD[T]HH:mm:SS[Z]")
            console.log({mentorID, topic, description, start_time, end_time, location})
            APIService.SetEvents({mentorID, topic, description, start_time, end_time, location}, token['mytoken']).then(resp => {
                eventID = resp.id
                APIService.SetAttendees({eventID, menteeID}, token['mytoken']).then(() => {
                    navigate("/mentee?menteeID=" + menteeID)
                    console.log()
                })
                .catch( error2 => console.log(error2))
                console.log()
            })
            .catch( error => console.log(error))
        }
    }

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to={"/mentee?menteeID=" + menteeID}>
                                <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>New Session with {menteeProfile.first_name}</h1>
                        <hr />
                        <div className='new__session__container'>
                            <div className='success__message'>
                                <Alert severity="success">Session successfully created.</Alert>
                            </div>
                            <div className='new__session__form__container'>
                                <div className='new__session__labels'>
                                    <p>Date *</p>
                                    <p>Time *</p>
                                    <p>Topic *</p>
                                    <p>Descripition *</p>
                                    <p>Location *</p>
                                </div>
                                <form className="new__session__form" id="new__session">
                                    <input type="date" name="date" value = {date} onChange = {e => setDate(e.target.value)}/><br/>
                                    <input type="time" name="starttime" value = {startTimeVal} onChange = {e => setStartTimeVal(e.target.value)}/>
                                    to
                                    <input type="time" name="endtime" value = {endTimeVal} onChange = {e => setEndTimeVal(e.target.value)}/><br/>
                                    <Select
                                        styles={selectStyle}
                                        defaultValue={null}
                                        onChange={e =>{if (e) setTopic(e.value)}}
                                        options={options}
                                    />
                                    <input type="text" name="description" value = {description} onChange = {e => setDescription(e.target.value)}/><br/>
                                    <input type="text" name="location" value = {location} onChange = {e => setLocation(e.target.value)}/><br/>
                                    {/* <select name="topic">
                                        <option label=" "></option>
                                        <option value="1">Jump</option>
                                        <option value="2">Cheese and Wine</option>
                                    </select><br/> */}
                                    <div className='error__message' id='err0'>Please fill in all fields!</div>
                                    <input type="submit" className="submit__button" value="Add Session" onClick = {CreateSession}/>
                                </form>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSession;