// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';
import './../assets/sass/variables.scss';

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
	dark: false,
	colors: {
	  background: '#FDFDFD',
	  surface: '#FFFFFF',
	  primary: '#64b5f6',
	  secondary: '#03DAC6',
	  error: '#B00020',
	  info: '#2196F3',
	  success: '#4CAF50',
	  warning: '#FB8C00',
	}
  }

export default createVuetify({
	theme: {
		defaultTheme: 'myCustomLightTheme',
		themes: {
			myCustomLightTheme,
		}
	}
})
