import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
    
    const Seconds = props.counter;
    let firstDigit = props.counter % 10;
    let secondDigit = Math.floor((props.counter / 10) % 10);
    let thirdDigit = Math.floor((props.counter / 100) % 10);
    let fourthDigit = Math.floor((props.counter / 1000) % 10);
    let fifthDigit = Math.floor((props.counter / 10000) % 10);
    let sixthDigit = Math.floor((props.counter / 100000) % 10);

    return (
        
        <div className="container-fluid">
            
            <div><i className="far fa-clock"/></div>
            <div>{sixthDigit}</div>
            <div>{fifthDigit}</div>
            <div>{fourthDigit}</div>
            <div>{thirdDigit}</div> 
            <div>{secondDigit}</div>
            <div>{firstDigit}</div>
            
        </div>     
        
    );
};

