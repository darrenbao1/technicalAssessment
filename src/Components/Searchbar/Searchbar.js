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
import { fetchWeatherData } from "../../utils/utils";
import { useState } from "react";
import { useSearchHistory } from "../Provider/SearchHistoryContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader/Loader";
import { useLoader } from "../Provider/LoadingContext";
export const Searchbar = (props) => {
	const prefersDarkMode = usePrefersDarkMode();
	const { addSearchTerm } = useSearchHistory();
	const { isLoading, showLoader, hideLoader } = useLoader();
	const [city, setCity] = useState("");
	const notify = () => toast("Sorry! City is invalid", { type: "error" });
	const successToast = () =>
		toast("Weather data fetched successfully", { type: "success" });
	const handleFetchWeather = () => {
		fetchWeatherData(
			city,
			props.setWeatherData,
			addSearchTerm,
			notify,
			successToast,
			showLoader,
			hideLoader
		);
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
			<Loader loading={isLoading} isDark={prefersDarkMode} />
			<ToastContainer theme={prefersDarkMode ? "dark" : "light"} />
		</SearchbarWrapper>
	);
};
