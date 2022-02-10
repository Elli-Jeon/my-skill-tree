import React from "react";
import Head from "next/head";
import BasicLayout from "layout";
import Header from "components/Header";
import TechSet from "components/TechSet";
import * as S from "./styles";
import dummy from "data";

const TechList = () => {
	return (
		<>
			<Head>
				<title>My Tech List</title>
			</Head>
			<Header />
			<S.TechListPageContainer>
				<TechSet
					title="프론트엔드"
					techlist={dummy.techlist.프론트엔드}
				></TechSet>
			</S.TechListPageContainer>
		</>
	);
};

export default TechList;
