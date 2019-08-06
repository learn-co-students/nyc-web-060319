import React from 'react'
import DogCard from "../Components/DogCard"

class Favorites extends React.Component{
    render(){
        let dogs = this.props.dogs.map(dogObj => <DogCard key={dogObj.id} dog={dogObj}/>)
        return (
            <div>
                <h1>Favorites Container</h1>
                {dogs}
            </div>
        )
    }
}

export default Favorites