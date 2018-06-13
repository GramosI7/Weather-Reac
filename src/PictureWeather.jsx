import React from "react";

const PictureWeather = (props) => {
    const { } = props;
    // console.log(props.img)
    return (
        <div>
            <img src={`./img/${props.img}.png`} alt="" />
        </div>
    )
}

export default PictureWeather;