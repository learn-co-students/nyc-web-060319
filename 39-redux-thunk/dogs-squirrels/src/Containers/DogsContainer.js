import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Animal from '../Components/Animal';
import Form from '../Components/Form';

class DogsContainer extends React.Component {
 render() {
  let dogsArray = this.props.dogs.map(dog => (
   <Animal key={dog.id} animal={dog} route={`/dogs/${dog.id}`} />
  ));
  return (
   <div className="container">
    {this.props.dogs.length > 0 ? (
     <div>
      <Switch>
       <Route
        path="/dogs/:id"
        render={({ match }) => {
         let id = parseInt(match.params.id);
         let dog = this.props.dogs.find(dog => dog.id === id);
         return (
          <div>
           <h3>Dogs Score: 0</h3>
           <Animal animal={dog} route={`/dogs/${dog.id}`} />
          </div>
         );
        }}
       />

       <Route
        path="/dogs"
        render={() => {
         return (
          <div>
           <h1>Dogs Container</h1>
           <h3>Dogs Score: 0</h3>
           <Form submitHandler={this.props.containerSubmitHandler} />
           {dogsArray}
          </div>
         );
        }}
       />
      </Switch>
     </div>
    ) : null}
   </div>
  );
 }
}

export default DogsContainer;
