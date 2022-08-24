import actions from './actions';
import { implementThemeValues } from '../theme-helpers';

const implementTheme = () => async(
  dispatch,
  getState
) => {
  let state = getState();

  let themeModel = state.theme.model;
  implementThemeValues(themeModel);

  dispatch(actions.setThemeIsImplemented(true));
}

export default {
  implementTheme,
};