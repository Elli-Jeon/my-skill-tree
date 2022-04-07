import React from "react";
import Header from "components/Header";
import * as S from "./styles";

const BasicLayout = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<S.Background>
			<Header />
			{children}
		</S.Background>
	);
};

export default BasicLayout;
