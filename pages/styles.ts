import styled from "styled-components";

export const PageContainer = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.top,
	.bottom {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.bottom {
		justify-content: space-evenly;
		// version, made by
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24px;
		}
		// contact email, github
		.contact {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-top: 2rem;
			width: 100%;
		}
		// login buttons
		.login {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
`;

export const HomeTitle = styled.h1`
	font-size: 6vh;
`;
