import styled, { css } from "styled-components";

export const ButtonContainer = styled.div<{ platform: "kakao" | "google" }>`
	width: 270px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	font-family: "Roboto", sans-serif;
	position: relative;
	margin: 8px;
	cursor: pointer;
	${({ platform }) => {
		if (platform === "kakao") {
			return css`
				background-color: #fee500;
				color: #000000;
				&:hover {
					background-color: #e5d119;
				}
			`;
		}
		if (platform === "google") {
			return css`
				background-color: #fefefa;
				color: #4f4f50;
				&:hover {
					background-color: #f5f5f5;
				}
			`;
		}
	}}
	.logo {
		position: absolute;
		left: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
