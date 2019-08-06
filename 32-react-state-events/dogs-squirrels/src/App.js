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
    data: {}
  }

  componentDidMount(){
    fetch("http://localhost:4000/animals")
    .then(resp=>resp.json())
    .then(apiData => this.setState({ data: apiData }))
  }

  render(){
    console.log("App State", this.state)
    return (
      <div>
        <Header/>

        {Object.keys(this.state.data).length > 0 ? 
        <div>
          <DogsContainer dogs={this.state.data.dogs} />
          <SquirrelsContainer squirrels={this.state.data.squirrels} />
        </div>:null}



        
      </div>
    );
  }
}


export default App;
