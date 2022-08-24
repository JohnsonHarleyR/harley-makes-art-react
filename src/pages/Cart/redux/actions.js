import TYPES from './types';

const cartAction = (data) => {
  return {
    type: TYPES.YOUR_ACTION,
    payload: data,
  };
};

export default {
  cartAction,
  
}