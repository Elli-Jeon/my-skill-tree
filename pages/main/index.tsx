import React from "react";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

const Main = () => {
	return (
		<S.Container>
			<canvas id="canvas" />
			<S.PositionContainer left={25} bottom={30}>
				<NodeMenu />
			</S.PositionContainer>
		</S.Container>
	);
};

export default Main;
