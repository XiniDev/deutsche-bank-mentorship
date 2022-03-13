import React, { useState, useEffect, CSSProperties } from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import cheveronRight from '../images/cheveronRight.svg';

import { Link, useNavigate } from "react-router-dom";

import { useCookies } from 'react-cookie';
import APIService from '../APIService';

import Select, { StylesConfig } from 'react-select';

type OptionType = {
    label: string;
    value: string;
}

const customControlStyles: CSSProperties = {
    width: '710px',
    borderColor: "#9CBDBD",
    color: "#9CBDBD",
}

const customMenuStyles: CSSProperties = {
    width: '710px',
    color: '#000000',
    padding: 20,
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

const ShowIntrs = (intr:any) => {
    return (
        <div className="interests__existing">{intr.intr.topic}</div>
    )
}

const EditInterests = () => {

    const [token] = useCookies(['mytoken'])
    let navigate = useNavigate()

    const [userID, setID] = useState<any>([])

    const [intrs, setIntrs] = useState<any[]>([])

    const [options, setOptions] = useState<OptionType[]>([])

    const [stringSet] = useState<Set<string>>(new Set<string>())
    const [stringArray, setStringArray] = useState<string[]>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getInterests(token['mytoken']).then(resp => {
            stringSet.add("Add new topic...")
            for (let i = 0; i < resp.length; i++) {
                stringSet.add(resp[i].topic)
            }
        }).then(() => {
            setStringArray(Array.from(stringSet))
            for (let i = 0; i < stringArray.length; i++) {
                setOptions(state => [...state, {value : stringArray[i], label : stringArray[i]}])
            }
        })
        APIService.getInterests(token['mytoken']).then(resp => setIntrs(APIService.GetGroupByID(userID,resp,"userID")))
    }, [userID])

    const intrsList = intrs.map((intr) => <ShowIntrs key={intr.topic} intr={intr}/>)

    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('')

    const SubmitIntrs = async (e: React.FormEvent<HTMLInputElement>) => {

        e.preventDefault()

        var conditions = 0

        var divsToShow = document.getElementsByClassName('error__message') as HTMLCollectionOf<HTMLElement>
        for(var i = 0; i < divsToShow.length; i++){
            divsToShow[i].style.display = "none"
        }
        
        if (!topic || !description ) {
            conditions += 1
            console.log("PLEASE FILL IN ALL DETAILS")
            divsToShow[1].style.display = "block"
        }
        if (intrs.some(e => e.topic == topic)) {
            conditions += 1
            console.log("You already specialise in this field")
            divsToShow[0].style.display = "block"
        }
        if (conditions == 0) {
            APIService.SetInterests({userID, topic, description}, token['mytoken']).then( () => {
                navigate('/profile')
                console.log()
            })
            .catch( error => console.log(error))
        }
    }

    const filterOption = (go:boolean) => {
        const input = document.getElementById("interestName");
        if (input) {
            go ? input.setAttribute("style", "display:block;") : input.setAttribute("style", "display:none;");
        }
    }

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className="profile__headers--edit">
                            <Link className="myprofile__link" to="/profile"><h1>My Profile</h1></Link>
                            <img src={cheveronRight} className="profile__headers--edit__cheveron"/>
                            <h2>Edit Interests</h2>
                        </div>
                        <hr />
                        <div className="interests">
                            {intrsList}
                        </div>
                        <form className="editprofile__form--other" id="specialisationForm">
                            <Select
                                styles={selectStyle}
                                defaultValue={null}
                                onChange={e => {
                                    if (e && e.label != "Add new topic...") {
                                        setTopic(e.value)
                                        filterOption(false)
                                    }
                                    else if (e?.label == "Add new topic...") filterOption(true)
                                }}
                                options={options}
                            />
                            <div className='error__message' id='err0'>You already specialise in this field!</div>
                            <input type="text" className="editprofile__form__inputs--other" name="interestname" id="interestName" placeholder="Please enter your interest..." onChange = {e => setTopic(e.target.value)}/><br/>
                            <textarea className="editprofile__form__textarea--other" name="interestdescription" id="interestDescription" placeholder="Description..." form="specialisationForm" onChange = {e => setDescription(e.target.value)}/><br/>
                            <div className='error__message' id='err1'>Please fill in all fields!</div>
                            <hr />
                            <div className="editprofile__form__buttons">
                                <Link to="/profile" className="editprofile__form__buttons__cancel">Cancel</Link>
                                <input type="submit" className="submit__button" value="Done" onClick = {SubmitIntrs}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditInterests;