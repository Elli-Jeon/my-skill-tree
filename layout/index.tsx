import React from "react";
import Header from "components/Header";
import * as S from "./styles";

interface BasicLayoutProps {
	children: React.ReactNode;
}

const BasicLayout = ({ children }: BasicLayoutProps) => {
	return (
		<S.Background>
			<Header />
			<S.Main>{children}</S.Main>
		</S.Background>
	);
};

export default BasicLayout;
