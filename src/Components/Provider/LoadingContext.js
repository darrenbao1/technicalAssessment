import React, { createContext, useContext, useState } from "react";

// Create a Context for the loading state
const LoaderContext = createContext({
	isLoading: false,
	showLoader: () => {},
	hideLoader: () => {},
});

export const useLoader = () => useContext(LoaderContext);

// Create a Provider Component
export const LoaderProvider = ({ children }) => {
	const [isLoading, setLoading] = useState(false);

	const showLoader = () => setLoading(true);
	const hideLoader = () => setLoading(false);

	// The context value that will be supplied to any descendants of this provider
	const value = {
		isLoading,
		showLoader,
		hideLoader,
	};

	return (
		<LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
	);
};
