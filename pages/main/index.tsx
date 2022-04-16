import React, { useEffect, useState } from "react";
import type { Canvas } from "fabric/fabric-impl";
import { fabric } from "fabric";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

const Main = () => {
	const [canvas, setCanvas] = useState<null | Canvas>(null);

	const initCanvas = () => {
		return new fabric.Canvas("canvas", {
			width: 800,
			height: 800,
			backgroundColor: "pink",
		});
	};

	useEffect(() => {
		setCanvas(initCanvas());
	}, []);

	const addRect = (canv: null | Canvas) => {
		const rect = new fabric.Rect({
			height: 200,
			width: 200,
			fill: "yellow",
		});

		canv?.add(rect);
		canv?.renderAll();
	};

	return (
		<S.Container>
			<button onClick={() => addRect(canvas)}>rect</button>
			<canvas id="canvas"></canvas>
			<S.PositionContainer left={25} bottom={30}>
				<NodeMenu />
			</S.PositionContainer>
		</S.Container>
	);
};

export default Main;
