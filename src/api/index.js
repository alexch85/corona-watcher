import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/all';

export const fetchData = async (country) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `https://disease.sh/v3/covid-19/countries/${country}`;
	}
	try {
		const {
			data: { cases, recovered, deaths, updated },
		} = await axios.get(changeableUrl);
		console.log(recovered);
		return { cases, recovered, deaths, updated };
	} catch (error) {
		alert('Something went wrong');
	}
};

export const fetchCountries = async () => {
	try {
		const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');
		return data.map((countryData) => countryData.country);
	} catch (error) {
		alert('Something went wrong');
	}
};

function getValues(valuesType) {
	const values = Object.values(valuesType).map((value) => value);
	return values;
}

export const fetchDailyData = async () => {
	try {
		const {
			data: { cases, deaths, recovered },
		} = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=60');
		const datesArray = Object.keys(cases).map((key) => key);
		const casesArray = getValues(cases);
		const deathsArray = getValues(deaths);
		const recoveredArray = getValues(recovered);
		const activeArray = [];

		for (let i = 0; i <= casesArray.length; i++) activeArray.push(casesArray[i] - recoveredArray[i]);

		const modifiedData = {
			datesArray: datesArray,
			casesArray: casesArray,
			deathsArray: deathsArray,
			recoveredArray: recoveredArray,
			activeArray: activeArray,
		};

		return modifiedData;
	} catch (error) {
		alert('Something went wrong...');
	}
};
