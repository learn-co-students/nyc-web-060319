import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const endpoint = 'http://localhost:3000/pizzas'

// This component is a class component since it needs state and to use a lifecycle method
class App extends Component {

  // All our state lives here because we need an easy way to pass it between the child components
  state = {
    pizzas: [],
    topping: '',
    size: '',
    vegetarian: false,
    id: null
  }
  // We need to keep track of our pizzas, the forms for our fields, and our editable pizza's id

  // Simple fetch upon mount
  componentDidMount() {
    fetch(endpoint)
    .then(r => r.json())
    .then(data => {
      this.setState({pizzas: data})
    })
  }

  // Fires whenever we try to change anything on the form
  handleChange = event => {
    // We get the name, this way we can conditionally update the state depending on which part of the form we're changing
    const name = event.target.name

    if (name === 'topping') {
      this.setState({topping: event.target.value})
    } else if (name === 'size') {
      this.setState({size: event.target.value})
    } else if (name === 'vegetarian') {
      this.setState({vegetarian: true})
    } else if (name === 'not-vegetarian') {
      this.setState({vegetarian: false})
    }
  }

  // This simply takes the soon to be edited pizza attributes and sets the state with them
  handleEditClick = pizza => {
    this.setState({topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian, id: pizza.id})
  }

  /* If we wanted a destructured version we could do something like this:

    handleEditClick = ({topping, size, vegetarian, id}) => {
      this.setState({topping, size, vegetarian, id})
    }

  */

  handleSubmit = () => {
    // We get the constants we need through destructuring
    const {topping, size, vegetarian} = this.state

    // Simple patch request
    fetch(`${endpoint}/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({topping, size, vegetarian})
    })
    .then(res => res.json())
    .then(newPizza => {
      // We use the spread operator to avoid mutating state
      // We filter the result
      // And then still using the spread operator we push the new pizza on
      const newPizzas = [...this.state.pizzas.filter(pizza => pizza.id !== this.state.id), newPizza]

      this.setState({pizzas: newPizzas})
    })
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian} />
        <PizzaList
          handleEditClick={this.handleEditClick}
          pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
