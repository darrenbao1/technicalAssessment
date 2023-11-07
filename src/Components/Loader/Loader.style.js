import styled, { keyframes } from "styled-components";

// Animation for the spinner
export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const FullScreenOverlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: ${({ isDark }) =>
		isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)"};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000; // Make sure it's above everything else
`;

// Spinner style with support for dark mode
export const Spinner = styled.div`
	border: 5px solid ${({ isDark }) => (isDark ? "#fff" : "#6C40B5")};
	border-top: 5px solid ${({ isDark }) => (isDark ? "#6C40B5" : "#FFF")};
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: ${spin} 2s linear infinite;
`;
