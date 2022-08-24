import TYPES from './types';

const setThemeIsImplemented = (value) => {
  return {
    type: TYPES.SET_THEME_IS_IMPLEMENTED,
    value: value,
  };
};

export default {
  setThemeIsImplemented,
  
}