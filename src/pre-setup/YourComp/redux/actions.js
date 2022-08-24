import TYPES from './types';

const compAction = (data) => {
  return {
    type: TYPES.YOUR_ACTION,
    payload: data,
  };
};

export default {
  compAction,
  
}