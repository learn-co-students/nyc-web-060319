import React from 'react';
import Animal from '../Components/Animal';
import Form from '../Components/Form';

class SquirrelsContainer extends React.Component {
 render() {
  console.log('squirrel props', this.props);
  let squirrelsArray = this.props.squirrels.map(squirrel => (
   <Animal
    key={squirrel.id}
    animal={squirrel}
    route={`/squirrels/${squirrel.id}`}
   />
  ));

  return (
   <div className="container">
    <h1>Squirrels Container</h1>
    <h3>Squirrels Score: 0</h3>
    <Form />
    {squirrelsArray}
   </div>
  );
 }
}

export default SquirrelsContainer;
