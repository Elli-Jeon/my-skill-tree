import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
`;

interface PositionProps {
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
}

export const PositionContainer = styled.div<PositionProps>`
	position: absolute;
	left: ${({ left }) => left}px;
	bottom: ${({ bottom }) => bottom}px;
`;
