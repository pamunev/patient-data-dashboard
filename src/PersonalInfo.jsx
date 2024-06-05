import React from "react";
import profilePicture from "../src/assets/jessica-taylor-2x.png";
import calendar from "./assets/calendar-personal.png";
import female from "./assets/female-icon-x2.png";
import phone from "./assets/phone-icon-x2.png";
import insurance from "./assets/insurance-icon-x2.png";

function PersonalInfo({ data }) {
  return (
    <div className="container-personal-info">
      <div className="pic-and-name">
        <img
          src={profilePicture}
          alt="Profile picture"
          className="photo-personal-info"
        />
        <div className="name-personal-info">{data.name}</div>
      </div>
      <div className="personal-info">
        <div className="personal-info-row">
          <img src={calendar} alt="DoB" className="personal-info-image" />
          <div className="personal-info-data">
            <div className="personal-info-category">Date Of Birth</div>
            <div className="personal-info-detail">{data.date_of_birth}</div>
          </div>
        </div>
        <div className="personal-info-row">
          <img src={female} alt="Gender" className="personal-info-image" />
          <div className="personal-info-data">
            <div className="personal-info-category">Gender</div>
            <div className="personal-info-detail">{data.gender}</div>
          </div>
        </div>
        <div className="personal-info-row">
          <img
            src={phone}
            alt="Contact Info."
            className="personal-info-image"
          />
          <div className="personal-info-data">
            <div className="personal-info-category">Contact Info.</div>
            <div className="personal-info-detail">{data.phone_number}</div>
          </div>
        </div>
        <div className="personal-info-row">
          <img
            src={phone}
            alt="Emergency Contacts"
            className="personal-info-image"
          />
          <div className="personal-info-data">
            <div className="personal-info-category">Emergency Contacts</div>
            <div className="personal-info-detail">{data.emergency_contact}</div>
          </div>
        </div>
        <div className="personal-info-row">
          <img
            src={insurance}
            alt="Insurance"
            className="personal-info-image"
          />
          <div className="personal-info-data">
            <div className="personal-info-category">Insurance Provider</div>
            <div className="personal-info-detail">{data.insurance_type}</div>
          </div>
        </div>
      </div>
      <button className="button">Show All Information</button>
    </div>
  );
}

export default PersonalInfo;
