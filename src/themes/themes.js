import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#33eb91',
			main: '#15ffc0',
			dark: '#00a152',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#525353',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});

export default theme;
