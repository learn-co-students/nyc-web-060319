import React from 'react'
import Animal from './Animal'
import Form from './Form'

class SquirrelsContainer extends React.Component {
    render() {
        console.log("squirrel props", this.props)
        let squirrelsArray = this.props.squirrels.map(squirrel => <Animal animal={squirrel} />)

        return(
            <div className="container">
                <h1>Squirrels Container</h1>
                <Form />
                {squirrelsArray}
            </div>
        )
    }
}

export default SquirrelsContainer