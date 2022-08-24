import actions from './actions';

const yourThunk = (data) => async(
  dispatch,
  getState
) => {
  let state = getState();

  dispatch(actions.commonAction(data));
}

export default {
  yourThunk,
};