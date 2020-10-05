import React from 'react';
import styles from './CountryPicker.module.css';

export default function CountryPicker() {
	return (
		<div className={styles.container}>
			<p>Select Region:</p>
			<select defaultValue=''>
				<option value=''>Global</option>
			</select>
		</div>
	);
}
