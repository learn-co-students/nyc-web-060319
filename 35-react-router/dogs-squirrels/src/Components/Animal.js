import React from 'react';
import { Link } from 'react-router-dom';

class Animal extends React.Component {
 state = { clicked: false };

 render() {
  console.log('Animal state', this.state.clicked);
  return (
   <div>
    <img
     src={
      this.state.clicked ? this.props.animal.sadImg : this.props.animal.happyImg
     }
     onClick={() => this.setState({ clicked: !this.state.clicked })}
    />
    <Link to={this.props.route}>
     <button>Go to show page</button>
    </Link>
   </div>
  );
 }
}

export default Animal;
