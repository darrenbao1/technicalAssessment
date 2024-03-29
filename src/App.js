import "./App.css";
import styled from "styled-components";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import backgroundImageLight from "../src/assets/bg-light.png";
import backgroundImageDark from "../src/assets/bg-dark.png";
import usePrefersDarkMode from "./hooks/usePrefersDarkMode";
import { Result } from "./Components/Results/Result";
import { useState } from "react";
import { SearchHistoryProvider } from "./Components/Provider/SearchHistoryContext";
import { LoaderProvider } from "./Components/Provider/LoadingContext";
const StyledApp = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: ${(props) =>
		props.isDark
			? `url(${backgroundImageDark})`
			: `url(${backgroundImageLight})`};
	background-size: cover;
	background-position: center;
	overflow-x: hidden;
	overflow-y: hidden;
`;

function App() {
	const isDark = usePrefersDarkMode();
	const [weatherData, setWeatherData] = useState(null);
	return (
		<SearchHistoryProvider>
			<LoaderProvider>
				<StyledApp isDark={isDark}>
					<Searchbar setWeatherData={setWeatherData} />
					<Result result={weatherData} setWeatherData={setWeatherData} />
				</StyledApp>
			</LoaderProvider>
		</SearchHistoryProvider>
	);
}

export default App;
