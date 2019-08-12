import React, { Component } from 'react';
import Pizza from '../components/Pizza'

// While this is a class component, it would also work well as a functional component
class PizzaList extends Component {

  // Renders all pizzas into pizza cards
  // The key only really needs to be unique, in this case we use the pizza's id
  // We pass the callback to each pizza so they can use it
  allPizzas = () => {
    return this.props.pizzas.map(pizza => (
      <Pizza
        key={pizza.id}
        pizza={pizza}
        handleEditClick={this.props.handleEditClick} />
    ))
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>

          {/* Render all pizzas here */}
          {this.allPizzas()}
          {/* We invoke allPizzas because this is not a callback */} 

        </tbody>
      </table>
    );
  }

}

export default PizzaList;
