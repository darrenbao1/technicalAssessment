// SearchHistoryContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const SearchHistoryContext = createContext();

// Hook for child components to get the search history object
// and re-render when it changes.
export const useSearchHistory = () => {
	return useContext(SearchHistoryContext);
};

// Provider component that wraps your app and makes search history object ...
// ... available to any child component that calls useSearchHistory().
export const SearchHistoryProvider = ({ children }) => {
	const [history, setHistory] = useState([]);

	// Load history from localStorage when the component mounts
	useEffect(() => {
		const loadedHistory =
			JSON.parse(localStorage.getItem("searchHistory")) || [];
		setHistory(loadedHistory);
	}, []);

	// Save history to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("searchHistory", JSON.stringify(history));
	}, [history]);

	const addSearchTerm = (searchTerm) => {
		setHistory((prevHistory) => [...prevHistory, searchTerm]);
	};

	const deleteSearchTermByIndex = (index) => {
		setHistory((prevHistory) => {
			const newHistory = [...prevHistory];
			newHistory.splice(index, 1);
			return newHistory;
		});
	};

	// Expose the history and functions to manipulate it
	const value = {
		history,
		addSearchTerm,
		deleteSearchTermByIndex,
	};

	return (
		<SearchHistoryContext.Provider value={value}>
			{children}
		</SearchHistoryContext.Provider>
	);
};
