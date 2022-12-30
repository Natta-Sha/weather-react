import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5df2d256a865b09561094ae4dde30205&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <div className="Weather">
      <h1>React debugging</h1>
      <br />
      <a
        href="https://www.shecodes.io/learn/workshops/949/units/74/lessons/293"
        target="_blank"
        rel="noreferrer"
      >
        SheCodes
      </a>
      <img src="test.png" alt="SheCodes logo" />
      <Audio
        height="80"
        width="80"
        radius="9"
        color="pink"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
