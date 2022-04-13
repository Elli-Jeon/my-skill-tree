import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

// node의 actions들 지우기
export const NodeActions = styled.div<{ showMenu: boolean }>`
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex: 1;
	transition: transform 300ms;
	${({ showMenu }) => {
		if (showMenu) {
			// show
			return css`
				//transform-origin: left;
				transform: scale(1);
			`;
		} else {
			// hide
			return css`
				transform-origin: left;
				transform: scale(0);
			`;
		}
	}}
`;
