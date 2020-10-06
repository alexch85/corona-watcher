import React from 'react';
import styles from './CountryPicker.module.css';
import LanguageIcon from '@material-ui/icons/Language';
import { FormControl, NativeSelect } from '@material-ui/core';

export default function CountryPicker() {
	return (
		<div className={styles.container}>
			<LanguageIcon size='1.3em' /> <p>Select Region:</p>
			<FormControl className={styles.formControl}>
				<NativeSelect color='primary' defaultValue=''>
					<option value=''>Global</option>
				</NativeSelect>
			</FormControl>
		</div>
	);
}
