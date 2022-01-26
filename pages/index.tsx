import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "public/logo/github.svg";
import Email from "public/logo/email.svg";
import LoginButton from "components/LoginButton";
import * as S from "./styles";

const Home: NextPage = () => {
	return (
		<S.HomePageContainer>
			<div className="top">
				<S.HomeTitle>My Tech Tree</S.HomeTitle>
			</div>
			<div className="bottom">
				<div className="info">
					<span>Elli-Jeon</span>
					<span>ver1.0</span>
					<div className="contact">
						<Link href="https://github.com/Elli-Jeon">
							<a target="_blank" aria-label="github">
								<GithubIcon fill="white" width="4vh" height="4vh" />
							</a>
						</Link>
						<Link href="mailto:raverena96@gmail.com">
							<a aria-label="email">
								<Email fill="white" width="4vh" height="4vh" />
							</a>
						</Link>
					</div>
				</div>
				<Link href="/techlist" passHref>
					<button>시작하기</button>
				</Link>
				<div className="login">
					<LoginButton platform="kakao" />
					<LoginButton platform="google" />
					<LoginButton platform="github" />
				</div>
			</div>
		</S.HomePageContainer>
	);
};

export default Home;
