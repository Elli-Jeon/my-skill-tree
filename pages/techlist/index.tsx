import React from "react";
import Head from "next/head";
import BasicLayout from "layout";
import Header from "components/Header";
import * as S from "./styles";

const TechList = () => {
	return (
		<>
			<Head>
				<title>My Tech List</title>
			</Head>
			<Header />
			<S.TechListPageContainer>
				<div>sadsad</div>
			</S.TechListPageContainer>
		</>
	);
};

export default TechList;
