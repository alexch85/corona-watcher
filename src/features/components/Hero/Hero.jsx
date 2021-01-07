import React from 'react';
import styles from './Hero.module.css';
import logo from '../../../assets/logos/logo.png';
import logoDarkMode from '../../../assets/logos/logo-darkmode.png';

export default function Hero({ darkMode }) {
  return (
    <div className={styles.heroContainer}>
      <img alt='logo' src={darkMode ? logoDarkMode : logo} />
    </div>
  );
}
