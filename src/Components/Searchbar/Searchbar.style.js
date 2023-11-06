import styled from "styled-components";
import { ReactComponent as SearchIconSVG } from "../../assets/SearchIcon.svg";
export const SearchbarDiv = styled.div`
	width: 620px;
	height: 60px;
	border-radius: 20px;
	background: ${(props) =>
		props.isDark ? "rgba(26, 26, 26, 0.50)" : "rgba(255, 255, 255, 0.2)"};
	border: 1px solid rgba(0, 0, 0, 0.2);
	padding-left: 22px;
	@media (max-width: 600px) {
		width: 310px;
		height: 40px;
		border-radius: 8px;
		padding-left: 11px;
	}
`;
export const SearchbarInput = styled.input`
	display: flex;
	width: 100%;
	margin-top: 2px;
	border: none;
	outline: none;
	color: ${(props) => (props.isDark ? "#FFF" : "#000")};
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	background: transparent;
`;
export const SearchbarWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 26px;
	@media (max-width: 600px) {
		padding-top: 19px;
	}
`;
export const SearchbarLabel = styled.div`
	position: relative;

	color: ${(props) =>
		props.isDark ? "rgba(255, 255, 255, 0.40)" : "rgba(0, 0, 0, 0.4)"};
	font-family: Noto Sans;
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	display: flex;
	margin-top: 3px;
`;
export const SearchButton = styled.button`
	width: 60px;
	height: 60px;
	border-radius: 20px;
	border: none;
	margin-left: 20px;
	background: ${(props) => (props.isDark ? "#28124D" : "#6C40B5")};
	@media (max-width: 600px) {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		margin-left: 10px;
	}
`;

export const StyledSearchIcon = styled(SearchIconSVG)`
	width: 34px;
	height: 34px;
	color: white;
	transition: color 0.3s;
	&:hover {
		color: grey;
	}
	@media (max-width: 600px) {
		width: 22px;
		height: 22px;
	}
`;
