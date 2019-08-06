import React from "react";

class DogCard extends React.Component {
  state = {clicked: false}

  render() {
    return (
      <div>
        <h2 className="bark">{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={()=> this.setState({clicked: !this.state.clicked})}>Bark</button>
        <button onClick={() => this.props.clickHandler(this.props.dog)}>Favorite/Unfavorite</button>
        {this.state.clicked ? <h2 className="bark">Ruff</h2>:null}
      </div>
    );
  }
}

export default DogCard;
