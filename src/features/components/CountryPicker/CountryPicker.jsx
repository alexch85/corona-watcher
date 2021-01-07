import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';

import LanguageIcon from '@material-ui/icons/Language';
import { FormControl } from '@material-ui/core';

import { fetchCountries } from '../../../api';
import cx from 'classnames';

export default function CountryPicker({
  handleCountryChange,
  country,
  darkMode,
}) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  //fetch countries list
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <div
      className={
        darkMode
          ? cx(styles.countryPickerContainer, styles.dark)
          : styles.countryPickerContainer
      }>
      <LanguageIcon size='1.3em' /> <p>Select Region:</p>
      <FormControl
        className={darkMode ? styles.formControlDark : styles.formControl}>
        <select
          value={country}
          onChange={(e) => handleCountryChange(e.target.value)}>
          <option style={{ color: '#fff' }} value=''>
            Global
          </option>
          {fetchedCountries.map((country, i) => (
            <option style={{ color: 'black' }} value={country} key={i}>
              {country}
            </option>
          ))}
        </select>
      </FormControl>
    </div>
  );
}
