import Logo from './Logo'
import {connect} from 'react-redux'
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    
  }
}


//меняет значение переменной на значение другой переменной 

// const root = document.documentElement
// const rootStyles = getComputedStyle(root);

// const lightTheme = rootStyles.getPropertyValue('--light_theme');
// const middleTheme = rootStyles.getPropertyValue('--middle_theme');
// const darkTheme = rootStyles.getPropertyValue('--dark_theme');

// const mainFontColor = rootStyles.getPropertyValue('--main_font_color');
// const contrastFontColor = rootStyles.getPropertyValue('--contrast_font_color');

// const onChangeTheme = (evt) => {
//   switch(evt.target.value){
//     case 'theme_white':
//       root.style.setProperty('--theme_color', lightTheme)
//       root.style.setProperty('--theme_font_color', mainFontColor)
//       break
//     case 'theme_grey':
//       root.style.setProperty('--theme_color', middleTheme)
//       root.style.setProperty('--theme_font_color', mainFontColor)
//       break
//     case 'theme_black':
//       root.style.setProperty('--theme_color', darkTheme)
//       root.style.setProperty('--theme_font_color', contrastFontColor)
//       break
//     default:
//       break
//   }
// }


//добавляет класс приложению, меняя область видимости переменных


const onChangeTheme = (evt) => {
  const app = document.querySelector('#App');
  switch(evt.target.value){
    case 'theme_white':
      app.classList.remove('theme_grey')
      app.classList.remove('theme_black')
      break
    case 'theme_grey':
      app.classList.add('theme_grey')
      app.classList.remove('theme_black')
      break
    case 'theme_black':
      app.classList.add('theme_black')
      app.classList.remove('theme_grey')
      break
    default:
      break
  }
}


export default compose(
  connect(mapStateToProps, {onChangeTheme}),
)(Logo)

