import React from "react";
import "./style.css";


function Jumbotron() {
  return (
    <div className="card-panel">
      <div className="container">
        <h3 className="jumbo-header"><center>Octocat Memory Game!</center></h3>
        <p className="jumbo-content"><center>Click on an Octocat to earn points, but don't click on any image more than once!</center></p>
      </div>
    </div>
  );
}

export default Jumbotron; 
