import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './DataBox.module.css';

export default function DataBox({ ctgColor, category, number }) {
	return (
		<div className={styles.container}>
			<Typography variant='h3' color='secondary'>
				390,229
			</Typography>
			<div className={styles.categoryBox}>
				<div
					style={{
						width: '30px',
						height: '20px',
						margin: '10px 0',
						backgroundColor: ctgColor,
						marginRight: '5px',
					}}
				/>
				<Typography variant='h5' color='secondary'>
					{category}
				</Typography>
			</div>

			<Typography color='secondary'>Total recovered form covid-19 by {new Date().toDateString()}</Typography>
		</div>
	);
}
