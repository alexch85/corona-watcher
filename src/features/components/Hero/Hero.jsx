import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ darkMode, handleDarkMode }) {
	return (
		<div className={styles.heroContainer}>
			<img alt='logo' src='/images/cw-logo.svg' />
		</div>
	);
}
