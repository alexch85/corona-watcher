import { Typography } from '@material-ui/core';
import React from 'react';
import CountryPicker from '../../features/components/CountryPicker/CountryPicker';
import DataBoxs from '../../features/components/DataBoxs/DataBoxs';
import Hero from '../../features/components/Hero/Hero';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.App}>
			<Hero />
			<CountryPicker />
			<Typography
				variant='h5'
				color='secondary'
				style={{
					margin: '15px 0',
				}}
			>
				{new Date().toDateString()}
			</Typography>
			<DataBoxs />
		</div>
	);
}

export default App;
