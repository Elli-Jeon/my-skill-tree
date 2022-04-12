import React from "react";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

const Main = () => {
	return (
		<S.Container>
			<S.NodeMenuContainer>
				<NodeMenu />
			</S.NodeMenuContainer>
		</S.Container>
	);
};

export default Main;
