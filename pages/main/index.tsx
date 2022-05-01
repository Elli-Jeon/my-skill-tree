import React from "react";
import dynamic from "next/dynamic";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

const NoSSRCanvas = dynamic(() => import("components/Canvas"), { ssr: false });

const Main = () => {
	return (
		<S.Container>
			<NoSSRCanvas></NoSSRCanvas>
			<S.PositionContainer left={25} bottom={30}>
				<NodeMenu />
			</S.PositionContainer>
		</S.Container>
	);
};

export default Main;
