import React from 'react';
import CountryPicker from '../CountryPicker/CountryPicker';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<div className={styles.container}>
			<img alt='logo' src='/images/cw-logo.svg' width='500px' />
		</div>
	);
}
