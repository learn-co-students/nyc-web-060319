import React from 'react';
import { Link } from 'react-router-dom';

class Animal extends React.Component {
 state = { clicked: false };

 render() {
  console.log('Animal props', this.props);
  return (
   <div>
    <Link to={this.props.showRoute}>
     <img
      src={
       this.state.clicked
        ? this.props.animal.sadImg
        : this.props.animal.happyImg
      }
      onClick={() => this.setState({ clicked: !this.state.clicked })}
     />
    </Link>
   </div>
  );
 }
}

export default Animal;
