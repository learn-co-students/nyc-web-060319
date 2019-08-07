import React from "react"

class Animal extends React.Component {
    state = {clicked: false}

    render(){
        console.log("Animal state", this.state.clicked)
        return <img src={this.state.clicked ? this.props.animal.sadImg:this.props.animal.happyImg} onClick={()=>this.setState({clicked: !this.state.clicked})}/>
    }
}

export default Animal