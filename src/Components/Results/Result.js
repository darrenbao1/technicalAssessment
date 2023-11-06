import React from "react";
import usePrefersDarkMode from "../../hooks/usePrefersDarkMode";
import sunImage from "../../assets/sun.png";
import cloudImage from "../../assets/cloud.png";
import {
	ResultDivWrapper,
	WeatherImage,
	VertialStackDiv,
	TodayWeatherLabel,
	TempratureLabelBig,
	HorizontalStackDiv,
	TempratureLabelSmall,
	CityLabel,
	InformationStackDiv,
	GeneralLabels,
} from "./Result.style";
import { SearchHistory } from "../SearchHistory/SearchHistory";

export const Result = (props) => {
	const prefersDarkMode = usePrefersDarkMode();
	const hasResult = props.result !== null;

	return (
		<ResultDivWrapper isDark={prefersDarkMode}>
			{hasResult && (
				<WeatherImage
					src={
						props.result.weatherDescription === "Rain" ? cloudImage : sunImage
					}
					alt="weather Image"
				/>
			)}
			<VertialStackDiv>
				<TodayWeatherLabel isDark={prefersDarkMode}>
					Today's Weather
				</TodayWeatherLabel>
				<TempratureLabelBig isDark={prefersDarkMode}>
					{hasResult ? props.result.temperatureMain : "--"}&deg;
				</TempratureLabelBig>
				<HorizontalStackDiv>
					<TempratureLabelSmall isDark={prefersDarkMode}>
						H: {hasResult ? props.result.temperatureHigh : "--"}&deg;
					</TempratureLabelSmall>
					&nbsp;
					<TempratureLabelSmall isDark={prefersDarkMode}>
						L: {hasResult ? props.result.temperatureLow : "--"}&deg;
					</TempratureLabelSmall>
				</HorizontalStackDiv>
				<HorizontalStackDiv>
					<CityLabel isDark={prefersDarkMode}>
						{hasResult
							? props.result.city + "," + props.result.countryCode
							: "--"}
					</CityLabel>
					<InformationStackDiv>
						<GeneralLabels isDark={prefersDarkMode}>
							{hasResult ? props.result.dateTime : "--"}
						</GeneralLabels>
						<GeneralLabels isDark={prefersDarkMode}>
							Humidity: {hasResult ? props.result.humidity : "--"}%
						</GeneralLabels>
						<GeneralLabels isDark={prefersDarkMode}>
							{hasResult ? props.result.weatherDescription : "--"}
						</GeneralLabels>
					</InformationStackDiv>
				</HorizontalStackDiv>
				<SearchHistory />
			</VertialStackDiv>
		</ResultDivWrapper>
	);
};
