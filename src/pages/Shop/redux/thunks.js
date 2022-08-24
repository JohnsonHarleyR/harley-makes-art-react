import actions from './actions';

const yourThunk = (data) => async(
  dispatch,
  getState
) => {
  let state = getState();

  dispatch(actions.shopAction(data));
}

export default {
  yourThunk,
};