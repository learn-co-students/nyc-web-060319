import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Animal from './Animal';
import DogsContainer from './DogsContainer';
import SquirrelsContainer from './SquirrelsContainer';

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
  this.props.history.push('/dogs');
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
  console.log('App State', this.props);
  return (
   <div>
    <Switch>
     <Route path="/welcome" component={Header} />
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
    </Switch>
    {/* <Header /> */}
   </div>
  );
 }
}

export default withRouter(App);
