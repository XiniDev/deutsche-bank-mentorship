import React, { useState, useEffect, CSSProperties } from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import cheveronRight from '../images/cheveronRight.svg';

import { Link } from "react-router-dom";

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

const ShowSpecs = (spec:any) => {
    return (
        <div className="specialisations__existing">{spec.spec.topic}</div>
    )
}

const EditSpecialisations = () => {

    const [token] = useCookies(['mytoken'])

    const [userID, setID] = useState<any>([])

    const [specs, setSpecs] = useState<any[]>([])

    const [options, setOptions] = useState<OptionType[]>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getSpecialties(token['mytoken']).then(resp => {
            setSpecs(APIService.GetGroupByID(userID,resp,"userID"))
            for (let i = 0; i < resp.length; i++) {
                setOptions(state => [...state, {value : resp[i].topic, label : resp[i].topic}])
            }
        })
    }, [userID])

    const specsList = specs.map((spec) => <ShowSpecs key={spec.topic} spec={spec}/>)

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className="profile__headers--edit">
                            <Link className="myprofile__link" to="/profile"><h1>My Profile</h1></Link>
                            <img src={cheveronRight} className="profile__headers--edit__cheveron"/>
                            <h2>Edit Specialisations</h2>
                        </div>
                        <hr />
                        <div className="specialisations">
                            {specsList}
                        </div>
                        <form className="editprofile__form--other" id="specialisationForm">
                            {/* <input type="text" className="editprofile__form__inputs--other" name="specialisationname" id="specialisationName" placeholder="Search..."/><br/> */}
                            <Select
                                styles={selectStyle}
                                defaultValue={selectedOption}
                                onChange={() => setSelectedOption}
                                options={options}
                            />
                            <textarea className="editprofile__form__textarea--other" name="specialisationdescription" id="specialisationDescription" placeholder="Description..." form="specialisationForm"/><br/>
                            <hr />
                            <div className="editprofile__form__buttons">
                                <Link to="/profile" className="editprofile__form__buttons__cancel">Cancel</Link>
                                <input type="submit" className="submit__button" value="Done"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditSpecialisations;