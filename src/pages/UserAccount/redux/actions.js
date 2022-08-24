import TYPES from './types';

const userAction = (data) => {
  return {
    type: TYPES.YOUR_ACTION,
    payload: data,
  };
};

export default {
  userAction,
  
}