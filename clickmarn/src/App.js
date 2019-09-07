import React from "react";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Scores from "./components/Scores";
import Jumbotron from "./components/Jumbotron";
import pics from "./pics.json";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics,
    selected: [],
    score: 0,
    topscore: 0
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
  selectImg = id => {
    // console.log to make sure it is being accessed
    console.log(id + " was clicked");
    let selected = this.state.selected;

    // check if selected image id is already in an array on the state
    if (selected.indexOf(id) === -1 && this.state.score < 12) {
        // if it's not, then increment the score state
        // compare that state to the top score to see if that needs to be updated
        selected.push(id); 
        var newScore = this.state.score + 1; 
      this.setState({
        selected: selected, 
        score: newScore,
        topscore: newScore > this.state.topscore ? newScore : this.state.topscore
      })
      if (newScore === 12) {
        this.setState({
          score: 0,
          selected: [],
        })
        alert("You Win! Play Again!");
      }
    } 
    // else if (this.state.score === 12) {
    //   this.setState({
    //     score: 0,
    //     selected: [],
    //   })
    //   alert("You Win! Play Again!");

    // }
    // if it is in the array, reset the game
    else {
      this.setState({
        score: 0,
        selected: [],
      })
      alert("You Lose, Try Again!");
    }
    console.log(selected); 
  };

  // Map over this.state.pics and render a Card component for each pic object
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Jumbotron />
          </div>
          <div className="row">
            <div className="col s3">
              <Scores 
                score={this.state.score}
                topscore={this.state.topscore}
              />
            </div>

            <div className="col s9">
              {this.state.pics.map(pic => (
                <Cards
                  id={pic.id}
                  key={pic.id}
                  image={pic.image}
                  shuffle={this.shuffle}
                  selectImg={this.selectImg}
                />
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
