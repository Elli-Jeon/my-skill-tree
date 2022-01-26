import React from "react";
import type { ITechSlice } from "components/TechSlice";
import * as S from "./styles";

interface ITechSet {
	title: string;
	techlist: ITechSlice[];
}

const TechSet = ({ title }: ITechSet) => {
	return (
		<S.SetContainer>
			<S.SetTitle>{title}</S.SetTitle>
			<S.SliceList></S.SliceList>
		</S.SetContainer>
	);
};

export default TechSet;
