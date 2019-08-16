import React from 'react';

class SignUp extends React.Component {
 state = {
  username: '',
  password: ''
 };

 changeHandler = e => {
  this.setState({
   [e.target.name]: e.target.value
  });
 };
 render() {
  return (
   <form onSubmit={e => this.props.submitHandler(e, this.state)}>
    <input
     type="text"
     name="username"
     placeholder="enter username"
     value={this.state.username}
     onChange={this.changeHandler}
    />
    <button>Sign Up</button>
   </form>
  );
 }
}

export default SignUp;
