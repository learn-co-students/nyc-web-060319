# Async Redux

- Which library should we import combineReducers from?
  A: redux

- What does combineReducers allow us to do?
  A: use multiple functions to control the value of a specific piece of the state tree.

- Why is this important?
  A: It allows for modulation of our code. It also defines the final structure of our state tree. The structure of the object that combineReducers returns will be the structure of our state tree

- What is connect()?
  A: A higher order component

- Which library should we import connect() from?
  A: react-redux

- What functionality does it provide?
  A: It does two important things: 1. gives our components access to mapStateToProps and mapDispatchToProps. 2. runs a `shouldComponentUpdate` in the wrapped component that does a strict check for state and props changes before re-rendering a component. This is why it's important that our reducers return new objects and not directly mutated versions of the current state

- What argument(s) should mapStateToProps accept?
  A: `state`, which represents the current redux store state tree

- What arguments(s) should mapDispatchToProps accept?
  A: `dispatch`, so our components have access to the dispatch function that will invoke our reducer

- What should mapStateToProps return?
  A: An object

- What should mapDispatchToProps return?
  A: An object

- How do our connect() fuctions create a single prop object in our component?
  A: It does a merge of the component's props from it's parent with the object that is returned from the mapStateToProps and mapDispatchToProps functions

- Why is mapDispatchToProps an important function?
  A: It gives our component access to the `store.dispatch()` function

- What does .then() return?
  A: it returns a promise

## Handling Async in Redux

- npm install redux-thunk
- Create your action creators
  - Including your async action creators
- Export your action creators
- Use action creators where necessary
