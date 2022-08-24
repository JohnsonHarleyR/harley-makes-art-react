

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

export const implementThemeValues = (theme) => {
  for (var prop in theme) {
    let varName = getCssVariable(prop);
    document.documentElement.style.setProperty(varName, theme[prop]);
  }
}