import React from "react";
import * as S from "./styles";

const BasicLayout = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return <S.Background>{children}</S.Background>;
};

export default BasicLayout;
