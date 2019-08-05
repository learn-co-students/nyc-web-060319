import React, {Component} from 'react'

class Header extends Component{

    render(){
        return <h1>Welcome to {this.props.cohortName}'s Dog and Squirrel App</h1>
    }
}


export default Header
