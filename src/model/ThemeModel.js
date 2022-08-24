
export default class ThemeModel {
  constructor(
    primaryColor,
    secondaryColor,
    accentColor,
    titleFont,
    navigationFont,
    normalFont,
  ) {
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.accentColor = accentColor;
    this.titleFont = titleFont;
    this.navigationFont = navigationFont;
    this.normalFont = normalFont;
  }

  getCssVariable = (propName) => {
    switch(propName){
      default:
        return null;
    }
  }
}