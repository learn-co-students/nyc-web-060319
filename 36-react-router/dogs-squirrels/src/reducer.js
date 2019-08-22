const defaultState = {
 dogLikes: 0,
 squirrelLikes: 0
};

function dogLikes(state, action) {
 switch (action.type) {
  case 'DOGS':
   return { ...state, dogLikes: (state.dogLikes += 1) };
  default:
   return { ...state };
 }
}

function squirrelLikes(state, action) {
 switch (action.type) {
  case 'Squirrel':
   return { ...state, dogLikes: (state.squirrelLikes += 1) };
  default:
   return { ...state };
 }
}

export default reducer;
