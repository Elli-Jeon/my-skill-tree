import styled, { css } from "styled-components";

interface ContainerProps {
	width?: number;
	height?: number;
}

export const Container = styled.div<ContainerProps>`
	border: 1px solid #c9c9c9;
	box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	transition: all 300ms;
	${({ width }) => {
		if (width) {
			return css`
				width: ${width}px;
			`;
		}
	}}
	${({ height }) => {
		if (height) {
			return css`
				height: ${height}px;
			`;
		}
	}}
`;
