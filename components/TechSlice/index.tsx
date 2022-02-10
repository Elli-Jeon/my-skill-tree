import React from "react";
import Image from "next/image";
import ArrowLink from "public/vectors/arrow-link.svg";
import * as S from "./styles";

export interface ITechSlice {
	logo?: string;
	tech: string;
	description?: string;
}

const TechSlice = () => {
	return (
		<S.SliceContainer>
			<S.ImageContainer> {/* <Image /> */}</S.ImageContainer>
			<S.ContentContainer>
				<div className="tech"></div>
				<div className="description"></div>
			</S.ContentContainer>
			<ArrowLink width="30px" height="30px" />
		</S.SliceContainer>
	);
};

export default TechSlice;
