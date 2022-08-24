import TYPES from './types';
import { API_ENDPOINTS, API_STATUS } from '../constants';
import { API_CLIENT } from '../constants';

const initialState = {
  api: {
    endPoints: API_ENDPOINTS,
    client: API_CLIENT,
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