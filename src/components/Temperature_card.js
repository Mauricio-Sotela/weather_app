import React from "react";
import "../css/Temperature_card.css";

function Temperature_card(props) {
  const date = new Date().toString().substring(0, 24);
  return props.data.base ? (
    <div className="temperature__container">
      <div className="temperature__time">
        <p>{`${props.data.name}, ${props.data.sys.country}   `}</p>
        <span>{date}</span>
      </div>
      <div className="temperature">
        <div className="degrees">
          <div>{Math.round(props.data.main.temp)}°</div>
          <div className="description">{props.data.weather[0].description}</div>
        </div>
        <div className="logo">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="logo"
          />
          <div>
            <span>{`Min:${Math.round(
              props.data.main.temp_min
            )} / Max:${Math.round(props.data.main.temp_max)}`}</span>
          </div>
        </div>
      </div>
      <div className="temperature__info">
        <span>
          <span
            className="iconify"
            data-icon="whh:sunrise"
            data-inline="false"
          ></span>
          {new Date(props.data.sys.sunrise * 1000).toLocaleString().slice(11)}
        </span>
        <span>
          <span
            className="iconify"
            data-icon="whh:sunset"
            data-inline="false"
          ></span>
          {new Date(props.data.sys.sunset * 1000).toLocaleString().slice(11)}
        </span>
      </div>
    </div>
  ) : (
    <div className="temperature__container">SELECT A CITY</div>
  );
}

export default Temperature_card;
