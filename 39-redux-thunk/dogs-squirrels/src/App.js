import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import DogsContainer from './Containers/DogsContainer';
import SquirrelsContainer from './Containers/SquirrelsContainer';
import FoOhFo from './Components/FoOFo';
import { fetchAnimals } from './actions';

class App extends React.Component {
 componentDidMount() {
  console.log('test');
  this.props.fetchAnimals();
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
       dogs={this.props.dogs}
       containerSubmitHandler={this.addDog}
      />
     )}
    />

    <Route
     path="/squirrels"
     render={() => (
      <SquirrelsContainer
       squirrels={this.props.squirrels}
       containerSubmitHandler={this.addSquirrel}
      />
     )}
    />
    <Route component={FoOhFo} />
   </Switch>
  );
 }
}
function msp(state) {
 console.log('REDUX STATE', state.animals);
 return {
  dogs: state.animals.dogs,
  squirrels: state.animals.squirrels
 };
}

function mdp(dispatch) {
 return {
  fetchAnimals: fetchAnimals(dispatch)
 };
}

export default connect(
 msp,
 mdp
)(App);
