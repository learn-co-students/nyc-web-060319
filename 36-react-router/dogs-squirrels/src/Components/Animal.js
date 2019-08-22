import React from 'react';
import { Link } from 'react-router-dom';

class Animal extends React.Component {
 state = { clicked: false, likes: 0 };

 likeClickHandler = () => {
  console.log('clicking');
  this.setState(prevState => ({
   likes: (prevState.likes += 1)
  }));
 };

 render() {
  console.log('Animal state', this.state.clicked);
  return (
   <div>
    <h3>Likes:{this.state.likes}</h3>
    <img
     src={
      this.state.clicked ? this.props.animal.sadImg : this.props.animal.happyImg
     }
     onClick={() => this.setState({ clicked: !this.state.clicked })}
    />
    <Link to={this.props.route}>
     <button>Go to show page</button>
    </Link>
    <button onClick={this.likeClickHandler}>Like</button>
   </div>
  );
 }
}

export default Animal;
