import React from 'react'
import Animal from './Animal'
class SquirrelsContainer extends React.Component {
    render() {
        console.log("squirrel props", this.props)
        let squirrelsArray = this.props.squirrels.map(squirrel => <Animal animal={squirrel} />)

        return(
            <div>
                <h1>Squirrels Container</h1>
                {squirrelsArray}
            </div>
        )
    }
}

export default SquirrelsContainer