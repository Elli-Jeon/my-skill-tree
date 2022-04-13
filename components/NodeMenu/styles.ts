import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

// node의 actions들 지우기
export const NodeActions = styled.div<{ className: string }>`
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex: 1;
	transition: transform 300ms;
	&.hide {
		transform-origin: left;
		transform: scale(0);
	}
	&.show {
		transform-origin: left;
		transform: scale(1);
	}
`;
