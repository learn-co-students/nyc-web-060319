import React from "react"

// Since this component is only presentational i.e. it doesn't do much except show off the pizza, it's fine as a functional component
const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian.toString()}</td>
      <td><button type="button"
        onClick={() => props.handleEditClick(props.pizza)}
        className="btn btn-primary">Edit Pizza</button></td>
      {/* The button needs a way to pass its pizza up to app, so we must create an anonymous callback that passes the pizza into the handleEditClick function */}
    </tr>
  )
}

export default Pizza
