import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div>
			<span>My Tech Tree</span>
			<span>Elli-Jeon</span>
			<span>ver1.1</span>
			<Image src={"/logo/github.svg"} alt="github" width="50px" height="50px" />
			<Image src={"/logo/email.svg"} alt="email" width="50px" height="50px" />
			<Image src={"/logo/kakao.png"} alt="kakao" width="240px" height="40px" />
			<Image
				src={"/logo/google.png"}
				alt="google"
				width="240px"
				height="40px"
			/>
		</div>
	);
};

export default Home;
