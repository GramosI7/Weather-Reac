import React from "react";
import PictureWeather from "./PictureWeather";

const Info = (props) => {
    // console.log("from", props.info)
    return (
        <div className="contain__info">
            <h3>Location : <span>{props.info.name}, {props.info.sys.country}</span></h3>
            <h3>Humidity : <span>{props.info.main.humidity}%</span></h3>
            <h3>Temperature : <span>{Math.floor(props.info.main.temp - 273.15)} C°</span></h3>
            <h3>Conditions : <span>{props.info.weather[0].main}</span></h3>
            <PictureWeather img={props.info.weather[0].main} />
        </div>
    )
}

export default Info;