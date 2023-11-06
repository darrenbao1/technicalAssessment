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
} from "./SearchHistory.style";
import usePrefersDarkMode from "../../hooks/usePrefersDarkMode";
import { useSearchHistory } from "../Provider/SearchHistoryContext";
export const SearchHistory = () => {
	const prefersDarkMode = usePrefersDarkMode();
	const { history, deleteSearchTermByIndex } = useSearchHistory();
	return (
		<SearchHistoryWrapper isDark={prefersDarkMode}>
			<SearchHistoryLabel isDark={prefersDarkMode}>
				Search History
			</SearchHistoryLabel>
			<SearchHistoryItemWrapper>
				{history.map((item, index) => (
					<SearchHistoryItem key={index}>
						<SearchHistoryCityLabel>
							{item.city},{item.countryCode}
						</SearchHistoryCityLabel>
						<SearchHistoryDateLabel>{item.dateTime}</SearchHistoryDateLabel>
						<ActionButtonContainer>
							<SearchIcon />
						</ActionButtonContainer>
						<ActionButtonContainer
							onClick={() => deleteSearchTermByIndex(index)}>
							<DeleteIcon />
						</ActionButtonContainer>
					</SearchHistoryItem>
				))}
			</SearchHistoryItemWrapper>
		</SearchHistoryWrapper>
	);
};
