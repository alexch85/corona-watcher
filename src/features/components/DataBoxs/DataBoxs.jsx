import React from 'react';
import DataBox from './DataBox/DataBox';
import styles from './DataBoxs.module.css';

export default function DataBoxs() {
	return (
		<div className={styles.container}>
			<DataBox category={'Infected'} ctgColor={'#f9903c'} />
			<DataBox category={'Recovered'} ctgColor={'#16ffcd'} />
			<DataBox category={'Deaths'} ctgColor={'#f36060'} />
		</div>
	);
}
