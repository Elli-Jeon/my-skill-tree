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
			<Image src={"/logo/kakao.svg"} alt="kakao" width="40px" height="100px" />
			<Image
				src={"/logo/google.svg"}
				alt="google"
				width="40px"
				height="100px"
			/>
		</div>
	);
};

export default Home;
