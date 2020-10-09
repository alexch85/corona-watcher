import React, { useState, useEffect } from 'react';
import styles from './DataChart.module.css';
import { fetchDailyData } from '../../../api/index';
import { Line, Bar } from 'react-chartjs-2';

export default function DataChart({ data: { cases, recovered, deaths }, country, darkMode }) {
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
						data: dailyData.activeArray.map((active) => active),
						label: 'Active',
						borderColor: '#1787e5',
						fill: true,
					},
					{
						data: dailyData.recoveredArray.map((recovered) => recovered),
						label: 'Recovered',
						borderColor: '#17e590',
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
			options={{
				legend: {
					labels: {
						// This more specific font property overrides the global property
						fontColor: darkMode ? '#ffffff' : '#333333',
					},
				},
			}}
		/>
	) : null;

	const barChart = cases ? (
		<Bar
			data={{
				labels: ['Infected', 'Active', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: ['#f9903c', '#1787e5', '#17e590', ' #f36060'],
						data: [cases, cases - recovered, recovered, deaths],
					},
				],
			}}
			options={{
				legend: { display: false },
				labels: {
					// This more specific font property overrides the global property
					fontColor: 'red',
				},
				title: {
					display: true,
					text: `Current state in ${country}`,
					fontColor: darkMode ? '#ffffff' : '#333333',
				},
			}}
		/>
	) : null;
	return <div className={styles.dataChartContainer}>{country ? barChart : lineChart}</div>;
}
