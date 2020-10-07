import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import CountryPicker from '../../features/components/CountryPicker/CountryPicker';
import DataBoxs from '../../features/components/DataBoxs/DataBoxs';
import DataChart from '../../features/components/DataChart/DataChart';
import Hero from '../../features/components/Hero/Hero';

import { fetchData } from '../../api/index';

import { Typography } from '@material-ui/core';

function App() {
	const [data, setData] = useState({});
	const [country, setCountry] = useState('');

	useEffect(() => {
		const fetchAPI = async () => {
			setData(await fetchData());
		};
		fetchAPI();
	}, []);

	const handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		setData(fetchedData);
		setCountry(country);
	};

	return (
		<div className={styles.App}>
			<Hero />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<div className={styles.AppContent}>
				<Typography
					variant='h5'
					color='secondary'
					style={{
						margin: '15px 0',
					}}
				>
					{new Date().toDateString()}
				</Typography>
				<DataBoxs data={data} />
				<DataChart data={data} country={country} />
			</div>
		</div>
	);
}

export default App;
