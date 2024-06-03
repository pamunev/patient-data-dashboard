import React from "react";
import emily from "../src/assets/emily-x2.png";
import ryan from "../src/assets/ryan-x2.png";
import brandon from "../src/assets/brandon-x2.png";
import jessica from "../src/assets/jessica-taylor.png";
import samantha from "../src/assets/samantha-x2.png";
import ashley from "../src/assets/ashley-x2.png";
import olivia from "../src/assets/olivia-x2.png";
import tyler from "../src/assets/tyler-x2.png";
import kevin from "../src/assets/kevin-x2.png";
import dylan from "../src/assets/dylan-x2.png";
import nathan from "../src/assets/nathan-x2.png";
import mike from "../src/assets/mike-x2.png";
import search from "../src/assets/search-x2.png";
import hotdogs from "../src/assets/horizontal-hotdogs-x2.png";

function PatientsList() {
  return (
    <div className="patients-list-menu">
      <div className="patients-list-header">
        <h2>Patients</h2>
        <img src={search} alt="Search" />
      </div>
      <div className="patients-list">
        <div className="patient-row">
          <div className="patient">
            <img src={emily} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
          <img src={hotdogs} alt="Info" />
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={ryan} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={brandon} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={jessica} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={samantha} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={ashley} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={olivia} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={tyler} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={kevin} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={dylan} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={nathan} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>

        <div className="patient-row">
          <div className="patient">
            <img src={mike} className="patient-pic" />
            <div className="patient-data">
              <p className="patient-name"></p>
              <p className="patient-traits"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsList;
