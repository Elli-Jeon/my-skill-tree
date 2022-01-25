import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "public/logo/github.svg";
import Email from "public/logo/email.svg";
import LoginButton from "components/LoginButton";
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
						<Link href="https://github.com/Elli-Jeon">
							<a target="_blank">
								<GithubIcon fill="white" width="4vh" />
							</a>
						</Link>
						<Link href="mailto:raverena96@gmail.com">
							<a>
								<Email fill="white" width="4vh" />
							</a>
						</Link>
					</div>
				</div>
				<div className="login">
					<LoginButton platform="kakao" />
					<LoginButton platform="google" />
				</div>
			</div>
		</S.PageContainer>
	);
};

export default Home;
