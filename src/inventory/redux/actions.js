import TYPES from './types';

const inventoryAction = (data) => {
  return {
    type: TYPES.YOUR_ACTION,
    payload: data,
  };
};

export default {
  inventoryAction,
  
}