import React from 'react';
import DataBox from './DataBox/DataBox';
import styles from './DataBoxs.module.css';
import { CircularProgress } from '@material-ui/core';

export default function DataBoxs({ data: { cases, recovered, deaths } }) {
	console.log(cases);
	if (!cases) {
		return <CircularProgress color='secondary' />;
	}
	return (
		<div className={styles.container}>
			<DataBox category={'Infected'} ctgColor={'#f9903c'} number={cases} />
			<DataBox category={'Recovered'} ctgColor={'#16ffcd'} number={recovered} />
			<DataBox category={'Deaths'} ctgColor={'#f36060'} number={deaths} />
		</div>
	);
}
