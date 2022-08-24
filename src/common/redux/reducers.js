import TYPES from './types';
import { API_STATUS } from '../constants';

const initialState = {
  api: {
    statuses: API_STATUS,
  },

}

const commonReducer = (state = initialState, action) => {
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

export default commonReducer;