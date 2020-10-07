import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<div className={styles.heroContainer}>
			<img alt='logo' src='/images/cw-logo.svg' />
		</div>
	);
}
