import { LoginResult } from '../../../common/constants/user';
import actions from './actions';
import apiClient from '../../../common/constants/util/api-client';
import apiEndPoints from '../../../common/constants/api-endpoints';

const signUserIn = (email, password) => async(
  dispatch,
  getState
) => {
  let state = getState();
  let api = state.common.api;
  let statuses = api.statuses;

  let result = apiClient.send(apiEndPoints.user.GET_USER_ACCOUNT_INFO, {email, password});
  // HACK will need to modify once real apis are used

  // if api call fails
  if (result.status === statuses.ERROR) {
    dispatch(actions.failToLogUserIn(result.error));
  } else if (result.status === statuses.SUCCESS) {
    // if wrong email or password
    if (result.data.result !== LoginResult.SUCCESS) {
      dispatch(actions.failToLogUserIn(result.data.result));
    } else {
      // if successful
      localStorage.setItem('user-login-email', result.data.user.email);
      localStorage.setItem('user-login-password', result.data.user.hashedPassword);

      dispatch(actions.logUserIn(result.data.user));
    }
  } else {
    dispatch(actions.failToLogUserIn(''));
  }
}

const autoSignUserIn = () => async(
  dispatch,
) => {
  let savedEmail = localStorage.getItem("user-login-email");
  let savedPassword = localStorage.getItem("user-login-password");
  if (!savedEmail || !savedPassword) {
    dispatch(actions.failToLogUserIn(''));
  } else {
    dispatch(signUserIn(savedEmail, savedPassword));
  }
}

export default {
  signUserIn,
  autoSignUserIn,
};