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
import {
	GetApiGatewayUrl,
	decodeData,
	fetchWeatherData,
} from "../../utils/utils";
import { useState } from "react";
import { useSearchHistory } from "../Provider/SearchHistoryContext";
export const Searchbar = (props) => {
	const prefersDarkMode = usePrefersDarkMode();
	const { addSearchTerm } = useSearchHistory();
	const [city, setCity] = useState("");

	const handleFetchWeather = () => {
		fetchWeatherData(city, props.setWeatherData, addSearchTerm);
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
			<SearchButton isDark={prefersDarkMode} onClick={handleFetchWeather}>
				<StyledSearchIcon />
			</SearchButton>
		</SearchbarWrapper>
	);
};
