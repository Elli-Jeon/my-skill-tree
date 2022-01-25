import React from "react";
import Image from "next/image";
import ArrowLink from "public/vectors/arrow-link.svg";
import * as S from "./styles";

const TechSlice = () => {
	return (
		<S.SliceContainer>
			<S.ImageContainer> {/* <Image /> */}</S.ImageContainer>
			<S.ContentContainer>
				<div className="title"></div>
				<div className="description"></div>
			</S.ContentContainer>
			<ArrowLink width="30px" height="30px" />
		</S.SliceContainer>
	);
};

export default TechSlice;
