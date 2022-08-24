import TYPES from './types';

const initialState = {
  isLoggedIn: false,
  errorMessage: null,
  accountInfo: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case TYPES.LOG_USER_IN:
      return {
        ...state,
        isLoggedIn: true,
        errorMessage: null,
        accountInfo: action.accountInfo,
      };
    case TYPES.FAIL_TO_LOG_USER_IN:
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.errorMessage,
        accountInfo: null,
      };
    case TYPES.CHANGE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
  }
}

export default userReducer;