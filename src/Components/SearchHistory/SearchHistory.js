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
export const SearchHistory = (props) => {
	const prefersDarkMode = usePrefersDarkMode();
	const { history, deleteSearchTermByIndex, addSearchTerm } =
		useSearchHistory();

	const handleFetchWeather = (city) => {
		fetchWeatherData(city, props.setWeatherData, addSearchTerm);
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
