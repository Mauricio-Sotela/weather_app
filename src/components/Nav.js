import React from "react";
import "../css/Nav.css";
import logo from "../img/logo.png";

function Nav(props) {
  return (
    <div className="nav__container">
      <div className="nav__icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav__search">
        <input
          type="text"
          placeholder="Search"
          value={props.state.value}
          onChange={(e) => {
            props.onChangeHandler(e);
          }}
          onKeyUp={(e) => {
            props.keyPress(e);
          }}
        />
        <i
          className="fas fa-search"
          onClick={() => {
            props.onClickHandler();
          }}
        ></i>
      </div>

      <div className="nav__temperature">
        <i
          className="fab"
          // onClick={() => {
          //   setState({ unit: "metric" });
          //   console.log(props.state);
          // }}
        >
          °C
        </i>
        <i
          className="fab"
          // onClick={() => {
          //   setState({ unit: "imperial" });
          //   console.log(props.state);
          // }}
        >
          °F
        </i>
      </div>
    </div>
  );
}

export default Nav;
