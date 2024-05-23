import React from "react";
import logo from "../src/assets/tech-care-logo-x2.png"
import homeIcon from "../src/assets/home-icon-x2.png"
import patientsIcon from "../src/assets/patients-icon-x2.png"
import calendarIcon from "../src/assets/calendar-icon-x2.png"
import chatIcon from "../src/assets/chat-icon-x2.png"
import creditCardIcon from "../src/assets/credit-card-x2.png"
import jose from "../src/assets/jose-2x.png"
import settings from "../src/assets/settings-x2.png"
import hotdogs from "../src/assets/hotdogs-x2.png"

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <img src={homeIcon} alt="Home" />
                        <p>Home</p>
                    </li>
                    <li className="active">
                        <img src={patientsIcon} alt="Home" />
                        <p>Patients</p>
                    </li>
                    <li>
                        <img src={calendarIcon} alt="Home" />
                        <p>Schedule</p>
                    </li>
                    <li>
                        <img src={chatIcon} alt="Home" />
                        <p>Message</p>
                    </li>
                    <li>
                        <img src={creditCardIcon} alt="Home" />
                        <p>Transactions</p>
                    </li>
                </ul>
            </nav>
            <div className="user">
                <img src={jose} alt="Jose" />
                <div className="user-info">
                    <p className="user-name">Dr. Jose Simmons</p>
                    <p className="user-title">General Practitioner</p>
                </div>
            </div>
            <div className="side-icons">
                <img src={settings} alt="Settings" />
                <img src={hotdogs} alt="More" />
            </div>
        </div>
    )
}

export default Header