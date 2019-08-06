import React from 'react'
import Animal from './Animal'

class DogsContainer extends React.Component{
    render(){
       let dogsArray = this.props.dogs.map(dog => <Animal animal={dog}/>)
        return (
            <div>
                <h1>Dogs Container</h1>
                {dogsArray}
            </div>
        )
    }
}

export default DogsContainer