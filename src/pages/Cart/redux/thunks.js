import actions from './actions';

const yourThunk = (data) => async(
  dispatch,
  getState
) => {
  let state = getState();

  dispatch(actions.cartAction(data));
}

export default {
  yourThunk,
};