import TYPES from './types';

const shopAction = (data) => {
  return {
    type: TYPES.YOUR_ACTION,
    payload: data,
  };
};

export default {
  shopAction,
  
}