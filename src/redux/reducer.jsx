const initialState = {
  randomMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_MESSAGE':
      return {
        ...state,
        randomMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
