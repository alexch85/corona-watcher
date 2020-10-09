import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import CountryPicker from '../../features/components/CountryPicker/CountryPicker';
import DataBoxs from '../../features/components/DataBoxs/DataBoxs';
import DataChart from '../../features/components/DataChart/DataChart';
import Hero from '../../features/components/Hero/Hero';

import { fetchData } from '../../api/index';

import { Switch, Typography } from '@material-ui/core';

import cx from 'classnames';

function App() {
	const [data, setData] = useState({});
	const [country, setCountry] = useState('');
	const [darkMode, setDarkMode] = useState(false);

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

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
		console.log(darkMode);
	};

	return (
		<div className={darkMode ? cx(styles.AppContanier, styles.dark) : styles.AppContanier}>
			<Hero />
			<CountryPicker darkMode={darkMode} handleCountryChange={handleCountryChange} />
			<div className={styles.AppContent}>
				<div className={styles.darkModeControl}>
					<Typography color='secondary'>
						<b>Dark mode:</b>
					</Typography>
					<Switch
						checked={darkMode}
						onChange={handleDarkMode}
						color='primary'
						name='dark mode'
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
				</div>
				<Typography
					variant='h5'
					color='secondary'
					style={{
						margin: '10px 0 15px',
					}}
				>
					{new Date().toDateString()}
				</Typography>
				<DataBoxs darkMode={darkMode} data={data} />
				<DataChart data={data} country={country} />
			</div>
		</div>
	);
}

export default App;
