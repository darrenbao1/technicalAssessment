import React from "react";
import usePrefersDarkMode from "../../hooks/usePrefersDarkMode";
import {
	SearchbarDiv,
	SearchbarInput,
	SearchbarWrapper,
	SearchbarLabel,
	SearchButton,
	StyledSearchIcon,
} from "./Searchbar.style";
import { GetApiGatewayUrl, decodeData } from "../../utils/utils";
import { useState } from "react";
import { useSearchHistory } from "../Provider/SearchHistoryContext";
export const Searchbar = (props) => {
	const prefersDarkMode = usePrefersDarkMode();
	const { addSearchTerm } = useSearchHistory();
	const [city, setCity] = useState("");
	const fetchWeather = async () => {
		const url = GetApiGatewayUrl(city);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			props.setWeatherData(decodeData(data));
			addSearchTerm(decodeData(data));
		} catch (error) {
			console.error("Failed to fetch weather data", error);
		}
	};
	return (
		<SearchbarWrapper>
			<SearchbarDiv isDark={prefersDarkMode}>
				<SearchbarLabel isDark={prefersDarkMode}>Country</SearchbarLabel>
				<SearchbarInput
					isDark={prefersDarkMode}
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
			</SearchbarDiv>
			<SearchButton isDark={prefersDarkMode} onClick={fetchWeather}>
				<StyledSearchIcon />
			</SearchButton>
		</SearchbarWrapper>
	);
};
