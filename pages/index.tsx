import type { NextPage } from "next";
import Image from "next/image";
import GithubIcon from "public/logo/github.svg";
import Email from "public/logo/email.svg";
import * as S from "./styles";

const Home: NextPage = () => {
	return (
		<S.PageContainer>
			<div className="top">
				<S.HomeTitle>My Tech Tree</S.HomeTitle>
			</div>
			<div className="bottom">
				<div className="info">
					<span>Elli-Jeon</span>
					<span>ver1.0</span>
					<div className="contact">
						<GithubIcon fill="white" width="4vh" />
						<Email fill="white" width="4vh" />
					</div>
				</div>
				<div className="login">
					<Image
						src={"/logo/kakao.png"}
						alt="kakao"
						width="240px"
						height="40px"
					/>
					<Image
						src={"/logo/google.png"}
						alt="google"
						width="240px"
						height="40px"
					/>
				</div>
			</div>
		</S.PageContainer>
	);
};

export default Home;
