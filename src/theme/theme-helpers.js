import { createMuiTheme } from '@material-ui/core/styles';

export const createTheme = (model) => {
  const theme = createMuiTheme();

  return theme;
}

export const implementThemeValuesToCss = (theme) => {
  for (var prop in theme) {
    let varName = getCssVariable(prop);
    document.documentElement.style.setProperty(varName, theme[prop]);
  }
}

//#region private

const getCssVariable = (propName) => {
  switch(propName){
    default:
      return null;
    case 'primaryColor':
      return '--primary-color';
    case 'secondaryColor':
      return '--secondary-color';
    case 'accentColor':
      return '--accent-color';
    case 'titleFont':
      return '--title-font';
    case 'navigationFont':
      return '--navigation-font';
    case 'normalFont':
      return '--normal-font';
  }
}

//#endregion