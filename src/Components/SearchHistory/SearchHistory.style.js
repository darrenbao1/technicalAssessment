import styled from "styled-components";
import { ReactComponent as SearchIconSVG } from "../../assets/SearchIcon.svg";
import { ReactComponent as DeleteIconSVG } from "../../assets/DeleteIcon.svg";
export const SearchHistoryWrapper = styled.div`
	border-radius: 24px;
	background: ${(props) =>
		props.isDark ? "rgba(26, 26, 26, 0.30)" : "rgba(255, 255, 255, 0.2)"};
	height: 100%;
	margin-top: 24px;
	padding: 20px;
`;
export const SearchHistoryLabel = styled.div`
	color: ${(props) => (props.isDark ? "#fff" : "#000")};
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
export const SearchHistoryItemWrapper = styled.div`
	margin-top: 26px;
	display: flex;
	flex-direction: column;
	gap: 18px;
`;
export const SearchHistoryItem = styled.div`
	border-radius: 16px;
	background: rgba(26, 26, 26, 0.5);
	height: 60px;
	display: flex;
	align-items: center;
	padding: 0 26px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const SearchHistoryCityLabel = styled.div`
	color: #fff;
	font-family: Noto Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

export const SearchHistoryDateLabel = styled.div`
	color: rgba(255, 255, 255, 0.5);
	text-align: right;
	font-family: Noto Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	@media (max-width: 600px) {
		order: 2;
		width: 100%;
		margin-top: 10px;
	}
`;

export const ActionButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 34px;
	height: 34px;
	border-radius: 50%;
	border: 2px solid rgba(255, 255, 255, 0.4);
	background: none;
	cursor: pointer;
`;
export const SearchIcon = styled(SearchIconSVG)`
	width: 16px;
	height: 16px;
	color: rgba(255, 255, 255, 0.4);
`;
export const DeleteIcon = styled(DeleteIconSVG)`
	width: 16px;
	height: 16px;
	color: rgba(255, 255, 255, 0.4);
`;
