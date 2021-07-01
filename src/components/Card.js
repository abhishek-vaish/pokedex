import React from "react";
import "../styles/BodyCard.css";

const Card = (props) => {
  return (
    <div key={props.key} className={`card ${props.type}`}>
      <div className="card__content">
        <h3>#{props.id}</h3>
        <p className="name">{props.name}</p>
        <img src={props.image} alt={props.name} />
        <div className="card__details">
          <table>
            <tr>
              <th>Height:</th>
              <th>{props.height} m</th>
            </tr>
            <tr>
              <th>Weight:</th>
              <th>{props.weight} kg</th>
            </tr>
            <tr>
              <th>Type:</th>
              <th>{props.type}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
