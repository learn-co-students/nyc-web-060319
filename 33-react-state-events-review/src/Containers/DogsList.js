import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogList extends Component {

  state = {dogs: []}

  componentDidMount(){
    fetch("http://localhost:4000/dogs")
    .then(resp=>resp.json())
    .then(data => this.setState({dogs: data}))
  }

  render() {
    let dogsArray = this.state.dogs.map(dogObj => <DogCard key={dogObj.id} dog={dogObj} clickHandler={this.props.clickHandler}/>) 
    return <div className="dogContainer">{dogsArray}</div>;
  }
}

export default DogList;
