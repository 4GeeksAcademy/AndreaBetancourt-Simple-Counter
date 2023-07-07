//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/SecondsCounter";

let counter = 0;

setInterval(() => {
    // render your react application
    ReactDOM.render(<SecondsCounter counter={counter}/>, document.querySelector("#app"));
    // incremento el contador
    counter++;
}, 1000);

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
