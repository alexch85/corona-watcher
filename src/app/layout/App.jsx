import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import { daysInWeek, monthInYear } from '../../utils/index';

import CountryPicker from '../../features/components/CountryPicker/CountryPicker';
import DataBoxs from '../../features/components/DataBoxs/DataBoxs';
import DataChart from '../../features/components/DataChart/DataChart';
import Hero from '../../features/components/Hero/Hero';

import { fetchData } from '../../api/index';

import { Switch, Typography } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import cx from 'classnames';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    //fetch covid data from API
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (country) => {
    //fetch data by country
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    //set selected country
    setCountry(country);
  };

  //dark mode switch toggle handler
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode ? cx(styles.AppContanier, styles.dark) : styles.AppContanier
      }>
      <div
        className={
          darkMode
            ? cx(styles.darkModeControl, styles.dark)
            : styles.darkModeControl
        }>
        <div className={styles.darkModeSwitch}>
          <Brightness4Icon color='primary' style={{ marginRight: '5px' }} />
          <Typography>Dark mode:</Typography>
          <Switch
            checked={darkMode}
            onChange={handleDarkMode}
            color='primary'
            name='dark mode'
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
      </div>
      <Hero darkMode={darkMode} />
      <Typography
        variant='h5'
        style={{
          margin: '5px 0',
          color: '#777',
          fontWeight: '300',
        }}>
        <Typography color='primary'>
          {daysInWeek[new Date().getDay()]} {monthInYear[new Date().getMonth()]}{' '}
          {new Date().getFullYear()}
        </Typography>
      </Typography>
      <CountryPicker
        darkMode={darkMode}
        handleCountryChange={handleCountryChange}
        country={country}
      />
      <div className={styles.AppContent}>
        <DataBoxs darkMode={darkMode} data={data} />
        <DataChart data={data} country={country} darkMode={darkMode} />
      </div>
      <div>
        <div className={styles.footer}>
          &#169; {new Date().getFullYear().toString()} Designed and developed by
          Alexander Chechik
        </div>
      </div>
    </div>
  );
}

export default App;
