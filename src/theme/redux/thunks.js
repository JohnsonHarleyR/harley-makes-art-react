import actions from './actions';
import { implementThemeValuesToCss } from '../theme-helpers';

const implementTheme = () => async(
  dispatch,
  getState
) => {
  let state = getState();

  let themeModel = state.theme.model;
  implementThemeValuesToCss(themeModel);

  dispatch(actions.setThemeIsImplemented(true));
}

// eslint-disable-next-line
export default {
  implementTheme,
};