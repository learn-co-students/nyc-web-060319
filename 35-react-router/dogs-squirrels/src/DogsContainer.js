import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Animal from './Animal';
import Form from './Form';

class DogsContainer extends React.Component {
 render() {
  let dogsArray = this.props.dogs.map(dog => (
   <Animal key={dog.id} animal={dog} showRoute={`/dogs/${dog.id}`} />
  ));
  return (
   <div className="container">
    {this.props.dogs.length > 0 ? (
     <div>
      <h1>Dogs Container</h1>
      <Form submitHandler={this.props.containerSubmitHandler} />
      <Switch>
       <Route
        path="/dogs/:id"
        render={({ match }) => {
         let dog = this.props.dogs.find(
          dog => dog.id === parseInt(match.params.id)
         );
         return (
          <Animal key={dog.id} animal={dog} showRoute={`/dogs/${dog.id}`} />
         );
        }}
       />
       <Route path="/dogs" render={() => dogsArray} />
      </Switch>
     </div>
    ) : (
     <h1>Loading</h1>
    )}
   </div>
  );
 }
}

export default DogsContainer;
