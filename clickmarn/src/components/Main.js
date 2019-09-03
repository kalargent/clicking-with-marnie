import React from "react";

const styles = {
  main: {
    background: "#fdfd96"
  }, 

  card: {
      width: "200px", 
      height: "200px"
  }
};

function Main() {
  return (
    <div className="container" style={styles.main}>
      <div>
        <h2> main container here </h2>
        <div class="card blue-grey darken-1" style={styles.card}>
          <div class="card-content white-text">
            <p>
              I'll put an image here 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
