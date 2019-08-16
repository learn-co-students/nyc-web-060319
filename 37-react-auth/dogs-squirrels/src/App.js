import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import DogsContainer from './Containers/DogsContainer';
import SquirrelsContainer from './Containers/SquirrelsContainer';
import FoOhFo from './Components/FoOFo';
import SignUp from './Components/SignUp';

class App extends React.Component {
 state = {
  dogs: [],
  squirrels: [],
  user: {}
 };

 componentDidMount() {
  let token = localStorage.getItem('token');

  if (token) {
   fetch('http://localhost:3000/api/v1/retrieve_user', {
    method: 'GET',
    headers: {
     'Content-Type': 'application/json',
     Accepts: 'application/json',
     Authorization: `${token}`
    }
   })
    .then(resp => resp.json())
    .then(user => {
     this.setState({ user: user });
     this.props.history.push('/dogs');
    });
  }

  fetch('http://localhost:4000/animals')
   .then(resp => resp.json())
   .then(apiData =>
    this.setState({ dogs: apiData.dogs, squirrels: apiData.squirrels })
   );
 }

 signUpSubmit = (e, user) => {
  e.preventDefault();
  console.log('Sign Up User:', user);
  fetch('http://localhost:3000/api/v1/signup', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Accepts: 'application/json'
   },
   body: JSON.stringify({
    user: {
     username: 'test',
     password: 'test'
    }
   })
  })
   .then(resp => resp.json())
   .then(data => {
    console.log('Response Data', data);
    localStorage.setItem('token', data.token);
    this.setState({ user: data.user });
   });
 };

 addDog = (e, dogObj) => {
  e.preventDefault();
  console.log('inside submit', dogObj);
  this.setState({ dogs: [dogObj, ...this.state.dogs] });
 };

 componentDidUpdate() {
  console.log('Been Updatin');
 }

 addSquirrel = squirrelObj => {
  this.setState({ squirrels: [...this.state.squirrels, squirrelObj] });
 };

 render() {
  return (
   <Switch>
    <Route path="/welcome" component={Header} />

    <Route
     path="/signup"
     render={() => <SignUp submitHandler={this.signUpSubmit} />}
    />

    <Route
     path="/dogs"
     render={() => (
      <DogsContainer
       user={this.state.user}
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

export default withRouter(App);
