import actions from './actions';

const yourThunk = (data) => async(
  dispatch,
  getState
) => {
  let state = getState();

  dispatch(actions.compAction(data));
}

export default {
  yourThunk,
};