import React from "react";
import "./style.css";

function NailTechCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.phonenumber}
          </li>
          <li>
            <strong>Salon Name:</strong> {props.salonname}
          </li>
          <li>
            <strong>Salon Website:</strong> {props.salonwebsite}
          </li>
        </ul>
      </div>
      {props.children}
      <span onClick={() => props.removeNailTech(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default NailTechCard;
