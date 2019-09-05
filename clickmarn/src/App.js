import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import Scores from "./components/Scores"; 
import pics from "./pics.json";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    // cards,
    pics
  };

  // SHUFFLE CARDS ON CLICK
  shuffle = id => {
    this.setState({
      pics: this.state.pics.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />

        <div className="container">
          <div className="row">

            <div className="col s3">
              {/* <Scores />  */}
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
