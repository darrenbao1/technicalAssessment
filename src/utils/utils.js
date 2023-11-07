export const decodeData = (data) => {
	const resultObject = {
		weatherDescription: data.weather[0].main,
		temperatureMain: ConvertKelvinToCelsius(data.main.temp),
		temperatureHigh: ConvertKelvinToCelsius(data.main.temp_max),
		temperatureLow: ConvertKelvinToCelsius(data.main.temp_min),
		humidity: data.main.humidity,
		city: data.name,
		countryCode: data.sys.country,
		dateTime: ConvertUnixTimestampToDateTime(data.dt),
	};
	return resultObject;
};

export const ConvertKelvinToCelsius = (kelvin) => {
	//Convert Temperature from Kelvin to Celsius and round to the nearest integer
	return Math.round(kelvin - 273.15);
};

export const ConvertUnixTimestampToDateTime = (unixTimestamp) => {
	const date = new Date(unixTimestamp * 1000);
	const day = `0${date.getDate()}`.slice(-2); // Pad with leading zero if necessary
	const month = `0${date.getMonth() + 1}`.slice(-2); // Note: Months are 0-indexed
	const year = date.getFullYear();

	// Convert to 12-hour format
	let hours = date.getHours();
	const amPm = hours >= 12 ? "pm" : "am";
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const formattedHours = `0${hours}`.slice(-2);

	const minutes = `0${date.getMinutes()}`.slice(-2);

	// Construct the formatted date-time string
	const formattedDateTime = `${day}-${month}-${year} ${formattedHours}:${minutes}${amPm}`;

	return formattedDateTime;
};

export const GetApiGatewayUrl = (city) => {
	const apiKey = "d39db95ef123b56f12e01f716d6c8a21"; //should be stored in ENV file but since it's a test project I'll leave it here
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	return url;
};

export const fetchWeatherData = async (
	city,
	setWeatherData,
	addSearchTerm,
	notify,
	successToast,
	showLoader,
	hideLoader
) => {
	const url = GetApiGatewayUrl(city);
	try {
		showLoader();
		const response = await fetch(url);
		if (!response.ok) {
			notify();
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		const decodedData = decodeData(data);
		setWeatherData(decodedData);
		addSearchTerm(decodedData);
		successToast();
	} catch (error) {
		console.error("Failed to fetch weather data", error);
	} finally {
		hideLoader();
	}
};
