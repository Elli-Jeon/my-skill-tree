import React, { useCallback } from "react";
import Kakao from "public/logo/kakao.svg";
import Google from "public/logo/google.svg";
import Github from "public/logo/github.svg";
import * as S from "./styles";

const LoginButton = ({
	platform,
}: {
	platform: "kakao" | "google" | "github";
}) => {
	// button logo
	const decideLogo = useCallback((platform) => {
		switch (platform) {
			case "kakao":
				return <Kakao height="20px" width="20px" />;
			case "google":
				return <Google height="20px" width="20px" />;
			case "github":
				return <Github height="20px" width="20px" fill="white" />;
		}
	}, []);

	// button title
	const decideTitle = useCallback((platform) => {
		switch (platform) {
			case "kakao":
				return "Login With Kakao";
			case "google":
				return "Login With Google";
			case "github":
				return "Login With Github";
		}
	}, []);

	return (
		<S.ButtonContainer platform={platform}>
			<div className="logo">{decideLogo(platform)}</div>
			<span>{decideTitle(platform)}</span>
		</S.ButtonContainer>
	);
};

export default LoginButton;
