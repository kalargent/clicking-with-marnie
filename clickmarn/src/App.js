import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main"

const styles = {
  container: {
    background: "#FFB6C1"
  }
};

function App() {
  return (
    <div>
      <div style={styles.container} className="container">
        <Navbar />
      </div>

      <div className="main">
        <Main /> 
      </div>
    </div>
  );
}

export default App;
