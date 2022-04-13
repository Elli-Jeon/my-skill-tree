import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

const Main = () => {
	const [canvas, setCanvas] = useState();

	const initCanvas = () => {
		new fabric.Canvas("canvas", {
			width: 800,
			height: 800,
			backgroundColor: "pink",
		});
	};

	useEffect(() => {
		// setCanvas(initCanvas())
	}, []);

	return (
		<S.Container>
			<canvas id="canvas"></canvas>
			<S.PositionContainer left={25} bottom={30}>
				<NodeMenu />
			</S.PositionContainer>
		</S.Container>
	);
};

export default Main;
