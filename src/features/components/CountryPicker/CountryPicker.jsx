import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import LanguageIcon from '@material-ui/icons/Language';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../../api';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const MyNativeSelect = withStyles({
	root: {
		width: 200,
	},
	icon: {
		color: '#777777',
	},
})(NativeSelect);

export default function CountryPicker({ handleCountryChange, darkMode }) {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};

		fetchAPI();
	}, [setFetchedCountries]);
	return (
		<div className={darkMode ? cx(styles.countryPickerContainer, styles.dark) : styles.countryPickerContainer}>
			<LanguageIcon size='1.3em' /> <p>Select Region:</p>
			<FormControl className={darkMode ? styles.formControlDark : styles.formControl}>
				<MyNativeSelect color='primary' defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
					<option value=''>Global</option>
					{fetchedCountries.map((country, i) => (
						<option value={country} key={i}>
							{country}
						</option>
					))}
				</MyNativeSelect>
			</FormControl>
		</div>
	);
}
