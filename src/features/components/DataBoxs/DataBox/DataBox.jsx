import { Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
import styles from './DataBox.module.css';

export default function DataBox({ ctgColor, category, number }) {
	return (
		<div className={styles.dataBoxContainer}>
			<Typography variant='h4'>
				<CountUp start={0} end={number} duration={1.5} separator=',' />
			</Typography>
			<div className={styles.categoryBox}>
				<div
					style={{
						width: '30px',
						height: '20px',
						margin: '10px 0',
						backgroundColor: ctgColor,
						marginRight: '10px',
					}}
				/>
				<Typography variant='h5'>{category}</Typography>
			</div>

			<Typography color='secondary' variant='text'>
				Total reported {category.toString().toLowerCase()} cases by {new Date().toDateString()}
			</Typography>
		</div>
	);
}
