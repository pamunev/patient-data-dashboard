import React from "react";
import profilePicture from "../src/assets/jessica-taylor-2x.png"

function PersonalInfo({ data }) {
    return (
        <div className="container-personal-info">
            <img src={profilePicture} alt="Profile picture" className="photo-personal-info"/>
            <h1 className="name-personal-info">{data.name}</h1>
            <div className="group-1-personal-info">
                <p className="label-text-personal-info">Date Of Birth</p>
                <p className="info-text-personal-info">{data.date_of_birth}</p>
            </div>
            <div className="group-2-personal-info">
                <p className="label-text-personal-info">Gender</p>
                <p className="info-text-personal-info">{data.gender}</p>
            </div>
            <div className="group-3-personal-info">
                <p className="label-text-personal-info">Contact Info.</p>
                <p className="info-text-personal-info">{data.phone_number}</p>
            </div>
            <div className="group-4-personal-info">
                <p className="label-text-personal-info">Emergency Contact</p>
                <p className="info-text-personal-info">{data.emergency_contact}</p>
            </div>
            <div className="group-5-personal-info">
                <p className="label-text-personal-info">Insurance Provider</p>
                <p className="info-text-personal-info">{data.insurance_type}</p>
            </div>
        </div>
    )
}

export default PersonalInfo