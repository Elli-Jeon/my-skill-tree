import styled from "styled-components";

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	//background: url("/background/background.jpg") no-repeat center center;
	background-size: cover;
`;

export const Main = styled.main`
	flex: 1; // Header제외 하고 꽉채우게
	position: relative;
`;
