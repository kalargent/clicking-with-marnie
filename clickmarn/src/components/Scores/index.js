import React from "react";
import "./style.css"; 

function Scores(props) {
  return (
    <div className="score-panel">
      <h4>Scores</h4>
      <span className="current-score">
          Score: <span>{props.score}</span>
          
      </span>
      <br></br>
      
      <span className="top-score">
          Top Score: <span>{props.topscore}</span>
          
      </span>
    </div>
  );
}

export default Scores;
