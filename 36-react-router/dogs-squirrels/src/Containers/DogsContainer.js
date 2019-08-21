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
         return <Animal animal={dog} route={`/dogs/${dog.id}`} />;
        }}
       />

       {/* <Animal animal={this.props.dogs[0]} /> */}

       <Route
        path="/dogs"
        render={() => {
         return (
          <div>
           <h1>Dogs Container</h1>
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
