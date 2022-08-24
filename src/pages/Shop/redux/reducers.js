import TYPES from './types';

const initialState = {
  dataItem: "Your var here",
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case TYPES.YOUR_ACTION:
      return {
        ...state,
        dataItem: action.payload,
      };
  }
}

export default shopReducer;