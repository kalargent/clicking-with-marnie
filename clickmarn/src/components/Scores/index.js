import React from "react";
import "./style.css"; 

function Scores(props) {
  return (
    <div className="score-panel">
      <h4>Scores</h4>
      <span className="score-fields">
          Score: <span>{props.score}</span>
          <br></br>
          Top Score: <span>{props.topscore}</span>
      </span>
    </div>
  );
}

export default Scores;
