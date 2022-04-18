import type { Canvas } from "fabric/fabric-impl";
import React, { useEffect, useState, useRef } from "react";
import useCanvasResize from "hooks/useCanvasResize";
import { fabric } from "fabric";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

const Main = () => {
	const canvasContainerRef = useRef<HTMLDivElement>(null);
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

	useCanvasResize({ canvas, ref: canvasContainerRef });

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
		<S.Container ref={canvasContainerRef}>
			<canvas id="canvas" />
			<S.PositionContainer left={25} bottom={30}>
				<NodeMenu />
			</S.PositionContainer>
		</S.Container>
	);
};

export default Main;
