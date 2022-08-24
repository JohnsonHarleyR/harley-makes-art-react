import TYPES from './types';

const commonAction = (data) => {
  return {
    type: TYPES.YOUR_ACTION,
    payload: data,
  };
};

export default {
  commonAction,
  
}