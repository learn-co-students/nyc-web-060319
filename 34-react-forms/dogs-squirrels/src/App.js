import React from 'react';
import './App.css';
import Header from "./Header"
import Animal from "./Animal"
import DogsContainer from './DogsContainer';
import SquirrelsContainer from './SquirrelsContainer';


class App extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {}
  // }

  state = {
      dogs:[], 
      squirrels:[]
    }

  componentDidMount(){
    fetch("http://localhost:4000/animals")
    .then(resp=>resp.json())
    .then(apiData => this.setState({ dogs: apiData.dogs, squirrels: apiData.squirrels }))
  }

  addDog = (e, dogObj) => {
    e.preventDefault()
    console.log("inside submit", dogObj)
    this.setState({ dogs: [dogObj, ...this.state.dogs]})
  }

componentDidUpdate(){
  console.log("Been Updatin")
}


  addSquirrel = (squirrelObj) => {
    this.setState({ squirrels: [...this.state.squirrels, squirrelObj] })

  }

  render(){
    console.log("App State", this.state)
    return (
      <div>
        <Header/>
        <DogsContainer dogs={this.state.dogs} containerSubmitHandler={this.addDog}/>
        <SquirrelsContainer squirrels={this.state.squirrels} containerSubmitHandler={this.addSquirrel}/>
      </div>
    );
  }
}


export default App;
