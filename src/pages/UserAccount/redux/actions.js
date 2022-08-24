import TYPES from './types';

const logUserIn = (user) => {
  return {
    type: TYPES.LOG_USER_IN,
    accountInfo: user,
  };
};

const failToLogUserIn = (errorMessage) => {
  return {
    type: TYPES.FAIL_TO_LOG_USER_IN,
    errorMessage: errorMessage,
  }
}

const changeErrorMessage = (errorMessage) => {
  return {
    type: TYPES.CHANGE_ERROR_MESSAGE,
    errorMessage: errorMessage,
  }
}

export default {
  logUserIn,
  failToLogUserIn,
  changeErrorMessage,
}