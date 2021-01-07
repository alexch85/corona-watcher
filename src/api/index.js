import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/all';

//fetch data from api method (country is an optional parameter)
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `https://disease.sh/v3/covid-19/countries/${country}`;
  }
  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(changeableUrl);
    return { cases, recovered, deaths, updated };
  } catch (error) {
    alert('Something went wrong');
  }
};

//fetch countries list method
export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      'https://disease.sh/v3/covid-19/countries',
    );
    return data.map((countryData) => countryData.country);
  } catch (error) {
    alert('Something went wrong');
  }
};

//get values with random data array parameter
function getValues(dataArray) {
  const values = Object.values(dataArray).map((value) => value);
  return values;
}

export const fetchDailyData = async () => {
  try {
    const {
      data: { cases, deaths, recovered },
    } = await axios.get(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=60',
    );
    const datesArray = Object.keys(cases).map((key) => key);
    const casesArray = getValues(cases);
    const deathsArray = getValues(deaths);
    const recoveredArray = getValues(recovered);
    //create active cases array
    const activeArray = [];

    //fill the active cases array method
    for (let i = 0; i <= casesArray.length; i++)
      activeArray.push(casesArray[i] - recoveredArray[i]);

    //save the new data we got in the array in an object
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
