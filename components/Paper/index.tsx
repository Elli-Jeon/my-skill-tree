import React from "react";
import * as S from "./styles";

interface PaperProps {
	children: React.ReactNode;
}

const Paper = ({ children }: PaperProps) => {
	return <S.Container>{children}</S.Container>;
};

export default Paper;
