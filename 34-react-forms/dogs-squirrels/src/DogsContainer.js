import React from 'react'
import Animal from './Animal'
import Form from './Form'

class DogsContainer extends React.Component{
    render(){
       let dogsArray = this.props.dogs.map(dog => <Animal animal={dog} />)
        return (
            <div className="container">
                <h1>Dogs Container</h1>
                <Form submitHandler={this.props.containerSubmitHandler}/>
                {dogsArray}
            </div>
        )
    }
}

export default DogsContainer