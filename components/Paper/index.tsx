import React from "react";
import * as S from "./styles";

interface PaperProps {
	children: React.ReactNode;
	width?: number; // Paper 넓이
	height?: number; // Paper 높이
}

const Paper = ({ children, width, height }: PaperProps) => {
	return (
		<S.Container width={width} height={height}>
			{children}
		</S.Container>
	);
};

export default Paper;
