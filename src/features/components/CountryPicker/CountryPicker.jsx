import React from 'react';
import styles from './CountryPicker.module.css';
import { makeStyles, NativeSelect } from '@material-ui/core';

import LanguageIcon from '@material-ui/icons/Language';

export default function CountryPicker() {
	return (
		<div className={styles.container}>
			<LanguageIcon /> <p>Select Region:</p>
			<NativeSelect defaultValue='' style={{ color: 'white' }}>
				<option value=''>Global</option>
			</NativeSelect>
		</div>
	);
}
