import { combineReducers } from 'redux';

const defaultState = {
 dogLikes: 0,
 squirrelLikes: 0
};

function dogReducer(state = defaultState.dogLikes, action) {
 console.log('state', state);
 switch (action.type) {
  case 'LIKE_DOG':
   return state + 1;
  default:
   return state;
 }
}

function squirrelReducer(state, action) {
 switch (action.type) {
  case 'LIKE_SQUIRREL':
   return { ...state, squirrelLikes: state.squirrelLikes + 1 };
  default:
   return state;
 }
}

const rootReducer = combineReducers({
 dogLikes: dogReducer
 //  squirrelLikes: squirrelReducer
});

export default rootReducer;
