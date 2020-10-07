import React from 'react';
import DataBox from './DataBox/DataBox';
import styles from './DataBoxs.module.css';
import { CircularProgress } from '@material-ui/core';

export default function DataBoxs({ data: { cases, recovered, deaths } }) {
	if (!cases) {
		return <CircularProgress color='secondary' />;
	}
	return (
		<div className={styles.dataBoxsContainer}>
			<DataBox category={'Infected'} ctgColor={'#f9903c'} number={cases} />
			<DataBox category={'Active'} ctgColor={'#1787e5'} number={cases - recovered} />
			<DataBox category={'Recovered'} ctgColor={'#17e590'} number={recovered} />
			<DataBox category={'Deaths'} ctgColor={'#f36060'} number={deaths} />
		</div>
	);
}
