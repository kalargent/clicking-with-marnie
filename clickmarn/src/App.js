import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Scores from "./components/Scores"; 
import pics from "./pics.json";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics,
    selected:[], 
    score:0, 
    topscore:0, 
  };

  // SHUFFLE CARDS ON CLICK
  shuffle = id => {
    this.setState({
      pics: this.state.pics.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    });
  };

  // ADD AN ITEM TO A LIST OF SELECTED ITEMS 
  // start a function called selected items 
  selectImg = (id) => {
    // console.log to make sure it is being accessed 
    console.log(id + " was clicked"); 
    let selected = this.state.id;
    
    if (selected.indexOf(id) === -1) {

    }

    // check if selected image id is already in an array on the state 

    
  
  // if it is in the array, go to the end game function 

  // if it's not, then increment the score state
  // compare that state to the top score to see if that needs to be updated 

  // call shuffle here instead of on the click? 
  }


  // END GAME 
  // reset the game state so that current score is zero
  // clear the array of selected items 

  // Map over this.state.pics and render a Card component for each pic object
  render() {
    return (
      <Wrapper>
        <Navbar />

        <div className="container">
          <div className="row">
            
          </div>
          <div className="row">

            <div className="col s3">
              <Scores /> 
            </div>

            <div className="col s9">
            {this.state.pics.map(pic => (
              <Cards id={pic.id} key={pic.id} image={pic.image} shuffle={this.shuffle} />
            ))}
            </div>

          </div>

        </div>

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
