import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CountryPicker from '../../features/components/CountryPicker/CountryPicker';
import DataBoxs from '../../features/components/DataBoxs/DataBoxs';
import Hero from '../../features/components/Hero/Hero';
import styles from './App.module.css';
import { fetchData } from '../../api/index';
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

		console.log(fetchedData);
		console.log(country);
	};

	return (
		<div className={styles.App}>
			<Hero />
			<CountryPicker handleCountryChange={handleCountryChange} />
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
		</div>
	);
}

export default App;
