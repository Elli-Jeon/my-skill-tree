import type { Canvas } from "fabric/fabric-impl";
import React, { useEffect, useState, useRef } from "react";
import useCanvasResize from "hooks/useCanvasResize";
import { fabric } from "fabric";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

interface ICanvasDrag {
	isDragging: boolean;
	selection: boolean;
	lastPosX: number;
	lastPosY: number;
}

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

	useCanvasResize(canvas);

	const [canvasDrag, setCanvasDrag] = useState<ICanvasDrag>({
		isDragging: false,
		selection: true,
		lastPosX: 0,
		lastPosY: 0,
	});

	useEffect(() => {
		if (canvas) {
			// ZOOM in & out
			canvas.on("mouse:wheel", (opt) => {
				const delta = opt.e.deltaY;
				let zoom = canvas.getZoom();
				zoom *= 0.999 ** delta; // 0.999 ** 125 = 0.882
				if (zoom > 20) zoom = 20; // max
				if (zoom < 0.01) zoom = 0.01; //min
				canvas.setZoom(zoom);
				opt.e.preventDefault();
				opt.e.stopPropagation();
			});

			// DRAG the canvas
			canvas.on("mouse:down", (opt) => {
				const e = opt.e;
				if (e.altKey) {
					setCanvasDrag(() => ({
						isDragging: true,
						selection: false,
						lastPosX: e.clientX,
						lastPosY: e.clientY,
					}));
				}
			});
			canvas.on("mouse:move", (opt) => {
				if (canvasDrag.isDragging) {
					const e = opt.e;
					let vpt = canvas.viewportTransform;
					if (vpt) vpt[4] += e.clientX - canvasDrag.lastPosX;
					if (vpt) vpt[5] += e.clientY - canvasDrag.lastPosY;
					canvas.requestRenderAll();
					setCanvasDrag((prev) => ({
						...prev,
						lastPosX: e.clientX,
						lastPosY: e.clientY,
					}));
				}
			});
			canvas.on("mouse:up", (opt) => {
				const vpt = canvas.viewportTransform;
				if (vpt) canvas.setViewportTransform(vpt);
				setCanvasDrag((prev) => ({
					...prev,
					isDragging: false,
					selection: true,
				}));
			});
		}
	}, [canvas, canvasDrag]);

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
				<button onClick={() => addRect(canvas)}>add rect</button>
				<NodeMenu />
			</S.PositionContainer>
		</S.Container>
	);
};

export default Main;
