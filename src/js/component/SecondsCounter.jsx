import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
    
    const formattedSeconds = props.counter;
    let primerDigito = props.counter % 10;
    let segundoDigito = Math.floor((props.counter / 10) % 10);
    let tercerDigito = Math.floor((props.counter / 100) % 10);
    let cuartoDigito = Math.floor((props.counter / 1000) % 10);
    let quintoDigito = Math.floor((props.counter / 10000) % 10);
    let sextoDigito = Math.floor((props.counter / 100000) % 10);

    return (
        
        <div className="container-fluid">
            
            <div><i className="far fa-clock"/></div>
            <div>{sextoDigito}</div>
            <div>{quintoDigito}</div>
            <div>{cuartoDigito}</div>
            <div>{tercerDigito}</div> 
            <div>{segundoDigito}</div>
            <div>{primerDigito}</div>
            
        </div>     
        
    );
};

