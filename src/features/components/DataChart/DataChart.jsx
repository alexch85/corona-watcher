import React, { useState, useEffect } from 'react';
import styles from './DataChart.module.css';
import { fetchDailyData } from '../../../api/index';
import { Line, Bar } from 'react-chartjs-2';

export default function DataChart({ data: { cases, recovered, deaths }, country }) {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchedDailyData = async () => {
			setDailyData(await fetchDailyData());
		};
		fetchedDailyData();
	}, []);

	const lineChart = dailyData.casesArray ? (
		<Line
			data={{
				labels: dailyData.datesArray.map((date) => date),
				datasets: [
					{
						data: dailyData.casesArray.map((cases) => cases),
						label: 'Infected',
						borderColor: '#f9903c',
						fill: true,
					},
					{
						data: dailyData.recoveredArray.map((recovered) => recovered),
						label: 'Recovered',
						borderColor: '#16ffcd',
						fill: true,
					},
					{
						data: dailyData.deathsArray.map((deaths) => deaths),
						label: 'Deaths',
						borderColor: ' #f36060',
						fill: true,
					},
				],
			}}
			width={100}
			height={50}
		/>
	) : null;

	const barChart = cases ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: ['#f9903c', '#16ffcd', ' #f36060'],
						data: [cases, recovered, deaths],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;
	return <div className={styles.container}>{country ? barChart : lineChart}</div>;
}
