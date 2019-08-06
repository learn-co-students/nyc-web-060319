import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from './Containers/DogsList'
import Favorites from './Containers/Favorites'

class App extends Component {

  state = {favorites: []}

  addToFavorites = (dogObj) => {
    console.log("inside of App", dogObj)
    this.setState({favorites: [...this.state.favorites, dogObj] })
    // this.setState({favorites: [dog, dog, dog, dogObj] )
  }

 
  render() {
    return (
      <div>
        <DogsList clickHandler={this.addToFavorites}/>
        <Favorites dogs={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
