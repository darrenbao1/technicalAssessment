import React from "react";
import { FullScreenOverlay, Spinner } from "./Loader.style";
export const Loader = ({ loading, isDark }) => {
	if (!loading) {
		return null;
	}
	return (
		<FullScreenOverlay isDark={isDark}>
			<Spinner isDark={isDark} />
		</FullScreenOverlay>
	);
};
