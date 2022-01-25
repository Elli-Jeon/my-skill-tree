import styled from "styled-components";
import { PageContainer } from "styles/styledcomponents";

export const HomePageContainer = styled(PageContainer)`
	flex-direction: column;
	align-items: center;
	color: white;
	.top,
	.bottom {
		width: 100%;
		height: 100%;
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
			font-size: 3vh;
		}
		// contact email, github
		.contact {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-top: 2vh;
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
