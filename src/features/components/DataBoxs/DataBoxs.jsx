import React from 'react';
import DataBox from './DataBox/DataBox';
import styles from './DataBoxs.module.css';
import { CircularProgress } from '@material-ui/core';

import cx from 'classnames';

export default function DataBoxs({ data: { cases, recovered, deaths }, darkMode }) {
	if (!cases) {
		return <CircularProgress color='secondary' />;
	}
	return (
		<div className={darkMode ? cx(styles.dataBoxsContainer, styles.dark) : styles.dataBoxsContainer}>
			<DataBox category={'Infected'} ctgColor={'#f9903c'} number={cases} />
			<DataBox category={'Active'} ctgColor={'#1787e5'} number={cases - recovered} />
			<DataBox category={'Recovered'} ctgColor={'#17e590'} number={recovered} />
			<DataBox category={'Deaths'} ctgColor={'#f36060'} number={deaths} />
		</div>
	);
}
