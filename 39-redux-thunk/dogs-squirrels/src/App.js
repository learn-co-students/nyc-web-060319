import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import DogsContainer from './Containers/DogsContainer';
import SquirrelsContainer from './Containers/SquirrelsContainer';
import FoOhFo from './Components/FoOFo';

class App extends React.Component {
 state = {
  dogs: [],
  squirrels: []
 };

 componentDidMount() {
  fetch('http://localhost:4000/animals')
   .then(resp => resp.json())
   .then(apiData =>
    this.setState({ dogs: apiData.dogs, squirrels: apiData.squirrels })
   );
 }

 addDog = (e, dogObj) => {
  e.preventDefault();
  console.log('inside submit', dogObj);
  this.setState({ dogs: [dogObj, ...this.state.dogs] });
 };

 addSquirrel = squirrelObj => {
  this.setState({ squirrels: [...this.state.squirrels, squirrelObj] });
 };

 render() {
  return (
   <Switch>
    <Route path="/welcome" render={() => <Header />} />

    <Route
     path="/dogs"
     render={() => (
      <DogsContainer
       dogs={this.state.dogs}
       containerSubmitHandler={this.addDog}
      />
     )}
    />

    <Route
     path="/squirrels"
     render={() => (
      <SquirrelsContainer
       squirrels={this.state.squirrels}
       containerSubmitHandler={this.addSquirrel}
      />
     )}
    />
    <Route component={FoOhFo} />
   </Switch>
  );
 }
}

export default App;
