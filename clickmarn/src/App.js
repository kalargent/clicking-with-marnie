import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import pics from "./pics.json";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics
  };

  // removePic = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.pics.filter(pic => pic.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ pics });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container">
          {this.state.pics.map(pic => (
            <Cards
              // removeFriend={this.removeFriend}
              id={pic.id}
              key={pic.id}
              image={pic.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
