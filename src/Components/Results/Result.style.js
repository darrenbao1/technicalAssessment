import styled from "styled-components";
export const ResultDivWrapper = styled.div`
	position: relative;
	display: flex;
	margin: 0 auto;
	width: 640px;
	height: 100%;
	border-radius: 40px;
	padding: 46px 40px;
	border: ${(props) =>
		props.isDark ? "none" : "1px solid rgba(255, 255, 255, 0.5)"};
	background: ${(props) =>
		props.isDark ? "rgba(26, 26, 26, 0.30)" : "rgba(255, 255, 255, 0.2)"};
	backdrop-filter: blur(10px);
	margin-top: 112px;
	@media (max-width: 600px) {
		border-radius: 20px;
		width: 320px;
		padding: 20px 26px;
	}
`;
export const TodayWeatherLabel = styled.div`
	color: ${(props) => (props.isDark ? "#FFF" : "#000")};
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
export const TempratureLabelBig = styled.div`
	font-family: Noto Sans;
	font-size: 96px;
	color: ${(props) => (props.isDark ? "#FFF" : "#6C40B5")};
`;
export const TempratureLabelSmall = styled.div`
	color: ${(props) => (props.isDark ? "#FFF" : "#000")};
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
export const CityLabel = styled.div`
	color: ${(props) => (props.isDark ? "#FFF" : "#666")};
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
export const GeneralLabels = styled.div`
	color: ${(props) => (props.isDark ? "#FFF" : "#666")};
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: right;
`;
export const VertialStackDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const HorizontalStackDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
export const InformationStackDiv = styled.div`
	display: grid;
	margin-left: auto;
	margin-right: 0px;
	grid-gap: 10px;
	grid-template-columns: 2fr 2fr 1fr;
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		margin-top: -70px;
	}
`;
export const WeatherImage = styled.img`
	position: absolute;
	right: 48px;
	top: -60px;
	width: 250px;
	height: 250px;
	@media (max-width: 600px) {
		width: 157px;
		height: 157px;
		right: 23px;
	}
`;
