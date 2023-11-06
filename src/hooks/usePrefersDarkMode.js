import { useEffect, useState } from "react";

// Custom hook to detect whether the user prefers dark mode
const usePrefersDarkMode = () => {
	const [prefersDarkMode, setPrefersDarkMode] = useState(
		() =>
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	useEffect(() => {
		const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

		const documentDarkModeChange = (e) => {
			setPrefersDarkMode(e.matches);
		};

		// Modern browsers have addEventListener method on mediaQueryList
		if (mediaQueryList.addEventListener) {
			mediaQueryList.addEventListener("change", documentDarkModeChange);
		} else {
			// Fallback for older browsers
			mediaQueryList.addListener(documentDarkModeChange);
		}

		// Remove the event listener on cleanup
		return () => {
			if (mediaQueryList.removeEventListener) {
				mediaQueryList.removeEventListener("change", documentDarkModeChange);
			} else {
				// Fallback for older browsers
				mediaQueryList.removeListener(documentDarkModeChange);
			}
		};
	}, []);

	return prefersDarkMode;
};

export default usePrefersDarkMode;
