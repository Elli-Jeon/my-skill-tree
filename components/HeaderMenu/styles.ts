import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-width: 240px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.image {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: 1px solid black;
		margin: 0.7rem 1.2rem;
	}
	.icon {
		margin: 0.7rem 1.2rem;
		cursor: pointer;
		transition: transform 200ms;
		&:hover {
			transform: translateY(1px);
		}
	}
`;

export const Divider = styled.span`
	width: 1px;
	background-color: #c5c5c5;
	height: 2.1rem;
`;
