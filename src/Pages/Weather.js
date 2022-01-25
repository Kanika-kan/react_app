import React, { useState } from "react";
import Weatherimg from "../images/weathericon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function Weather() {
  const apiKey = "747cf3f56014ee59e1446a4f8558d7a6";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState(null);

  const getWeatherDetail = (cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetail(inputCity);
  };
  return (
    <div>
      {/* <div className="col-md-12"> */}
      {/* <div className="weatherBg " >
          <h1 className="heading">Check Weather here</h1>
          <div className="d-grid gap 3 col-4 mt-3 bton">
          <input
            type="text"
            className="from-control"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button 
            className="btn btn-primary "
            type="button"
            onClick={handleSearch}
          >
            search
          </button>
          </div>
        </div> */}
      {/* </div> */}
      <Card className="text-center">
        <Card.Header>Weather</Card.Header>
        <Card.Body className="weatherBg ">
          <Card.Title>Search your city</Card.Title>
          <Card.Text className="mt-4">
            <input
              type="text"
              className="from-control"
              value={inputCity}
              onChange={handleChangeInput}
            />
          </Card.Text>
          {/* <div className="d-grid gap-2"> */}
          <Button variant="primary" className="boton" onClick={handleSearch}>
            Search
          </Button>
          {/* </div> */}
          {/* <Button  className="d-grid gap-2"
            className="btn btn-primary "
            type="button"
            onClick={handleSearch}
          >
            search
          </Button> */}
        </Card.Body>
      </Card>

      {data && (
        <div className="col-md-12 text-center mt-4 imp">
          <div className="shadow rounded  mt-4">
            <img className="iconimg" src={Weatherimg} />
            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">
              {(data?.main?.temp - 273.15).toFixed(2)}c
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}
