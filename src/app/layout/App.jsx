import React from 'react';
import CountryPicker from '../../features/components/CountryPicker/CountryPicker';
import Hero from '../../features/components/Hero/Hero';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.App}>
			<Hero />
			<CountryPicker />
		</div>
	);
}

export default App;
