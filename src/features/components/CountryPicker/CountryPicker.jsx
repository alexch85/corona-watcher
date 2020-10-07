import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import LanguageIcon from '@material-ui/icons/Language';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../../api';

export default function CountryPicker({ handleCountryChange }) {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};

		fetchAPI();
	}, [setFetchedCountries]);
	return (
		<div className={styles.container}>
			<LanguageIcon size='1.3em' /> <p>Select Region:</p>
			<FormControl className={styles.formControl}>
				<NativeSelect color='primary' defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
					<option value=''>Global</option>
					{fetchedCountries.map((country, i) => (
						<option value={country} key={i}>
							{country}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
}
