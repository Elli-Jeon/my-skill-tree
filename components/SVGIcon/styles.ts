import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: transform 200ms;
	&:hover {
		transform: translateY(1px);
	}
`;
