function likeDog() {
 return { type: 'LIKE_DOG' };
}

function likeSquirrel() {
 return { type: 'LIKE_SQUIRREL' };
}

function fetchAnimals(dispatch) {
 return function() {
  return fetch('http://localhost:4000/animals')
   .then(resp => resp.json())
   .then(apiData => dispatch({ type: 'FETCH_ANIMALS', payload: apiData }));
 };
}

export { likeDog, likeSquirrel, fetchAnimals };
