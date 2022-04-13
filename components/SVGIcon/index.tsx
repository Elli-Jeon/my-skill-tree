import React from "react";
import * as S from "./styles";

interface SVGIconProps {
	onClick?: React.MouseEventHandler;
}

const SVGIcon: React.FC<SVGIconProps> = ({ children, onClick }) => {
	return <S.Container onClick={onClick}>{children}</S.Container>;
};

export default SVGIcon;
