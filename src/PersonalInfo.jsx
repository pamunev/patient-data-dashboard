import React from "react";
import profilePicture from "..assets/jessica-taylor.png"

function PersonalInfo({ data }) {
    return (
        <div>
            <img src={profilePicture} alt="Profile picture" />
            <h1>{data.name}</h1>
            <div>
                <p>Date Of Birth</p>
                <p>{data.date_of_birth}</p>
            </div>
            <div>
                <p>Gender</p>
            </div>
            <div>
                <p>Contact Info.</p>
                <p>{data.phone_number}</p>
            </div>
            

        </div>
    )
}

export default PersonalInfo