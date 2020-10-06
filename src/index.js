import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';

import { ThemeProvider } from '@material-ui/core/styles';
import themes from './themes/themes';

ReactDOM.render(
	<ThemeProvider theme={themes}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
