import React from "react";

function Cards(props) {
  return (

    <div className="card">
      <div class="card blue-grey darken-1">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
    </div>
     
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Cards;


