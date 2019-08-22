import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
 render() {
  console.log('header props', this.props);
  return (
   <>
    <h1>Welcome to 060319's Dog and Squirrel App</h1>
    <h3>Current Score</h3>
    <h5>Dogs: {this.props.dogLikes}</h5>
    <button onClick={this.props.addDogLike}>Like Dogs</button>
    <h5>Squirrels: {this.props.squirrelLikes}</h5>
    <button onClick={() => {}}>Like Squirrels</button>
   </>
  );
 }
}

function mapStateToProps(state) {
 return {
  dogLikes: state.dogLikes,
  squirrelLikes: state.squirrelLikes
 };
}
{
 /* <Header dogLikes={} squirrelLikes={}/>

{appKey1: , appKey2: }
{dogLikes: , squirrelLikes: }
{...props, returneObj} */
}

function mapDispatchToProps(dispatch) {
 return {
  addDogLike: () => dispatch({ type: 'LIKE_DOG' })
 };
}

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Header);
