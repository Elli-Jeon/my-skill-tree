import React from "react";
import type { ITechSlice } from "components/TechSlice";
import * as S from "./styles";

interface ITechSet {
	title: string;
	techlist: ITechSlice[];
}

const TechSet = ({ title, techlist }: ITechSet) => {
	return (
		<S.SetContainer>
			<S.SetTitle>{title}</S.SetTitle>
			<S.SliceList>
				{techlist.map((tech) => {
					return <div>{tech.tech}</div>;
				})}
			</S.SliceList>
		</S.SetContainer>
	);
};

export default TechSet;
