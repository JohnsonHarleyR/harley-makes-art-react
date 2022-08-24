import TYPES from './types';
import Theme from '../all-themes';

const initialState = {
  isThemeImplemented: false,
  model: Theme.DEFAULT,
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case TYPES.SET_THEME_IS_IMPLEMENTED:
      return {
        ...state,
        isThemeImplemented: action.value,
      };
  }
}

export default themeReducer;