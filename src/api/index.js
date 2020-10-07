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
		console.log(cases, recovered, deaths, updated);
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
		console.log(error);
		alert('Something went wrong');
	}
};
