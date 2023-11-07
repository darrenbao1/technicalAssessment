import React from "react";
import {
	SearchHistoryWrapper,
	SearchHistoryLabel,
	SearchHistoryItemWrapper,
	SearchHistoryItem,
	SearchHistoryCityLabel,
	SearchHistoryDateLabel,
	ActionButtonContainer,
	SearchIcon,
	DeleteIcon,
	HorizontalStackDiv,
	ButtonWrapper,
} from "./SearchHistory.style";
import usePrefersDarkMode from "../../hooks/usePrefersDarkMode";
import { useSearchHistory } from "../Provider/SearchHistoryContext";
import { fetchWeatherData } from "../../utils/utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoader } from "../Provider/LoadingContext";
export const SearchHistory = (props) => {
	const prefersDarkMode = usePrefersDarkMode();
	const { showLoader, hideLoader } = useLoader();
	const { history, deleteSearchTermByIndex, addSearchTerm } =
		useSearchHistory();

	const notify = () => toast("Sorry! City is invalid", { type: "error" });
	const successToast = () =>
		toast("Weather data fetched successfully", { type: "success" });
	const handleFetchWeather = (city) => {
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
		<SearchHistoryWrapper isDark={prefersDarkMode}>
			<SearchHistoryLabel isDark={prefersDarkMode}>
				Search History
			</SearchHistoryLabel>
			<SearchHistoryItemWrapper>
				{[...history].reverse().map((item, index) => (
					<SearchHistoryItem key={index} isDark={prefersDarkMode}>
						<HorizontalStackDiv>
							<SearchHistoryCityLabel isDark={prefersDarkMode}>
								{item.city},{item.countryCode}
							</SearchHistoryCityLabel>
							<SearchHistoryDateLabel isDark={prefersDarkMode}>
								{item.dateTime}
							</SearchHistoryDateLabel>
						</HorizontalStackDiv>
						<ButtonWrapper>
							<ActionButtonContainer
								isDark={prefersDarkMode}
								onClick={() => handleFetchWeather(item.city)}>
								<SearchIcon isDark={prefersDarkMode} />
							</ActionButtonContainer>
							<ActionButtonContainer
								onClick={() =>
									deleteSearchTermByIndex(history.length - 1 - index)
								}
								isDark={prefersDarkMode}>
								<DeleteIcon isDark={prefersDarkMode} />
							</ActionButtonContainer>
						</ButtonWrapper>
					</SearchHistoryItem>
				))}
			</SearchHistoryItemWrapper>
		</SearchHistoryWrapper>
	);
};
