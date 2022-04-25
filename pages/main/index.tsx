import type { Canvas } from "fabric/fabric-impl";
import React, { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import { debounce, last } from "lodash";
import useCanvasResize from "hooks/useCanvasResize";
import NodeMenu from "components/NodeMenu";
import * as S from "./styles";

interface ILastPos {
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

	const [selection, setSelection] = useState(true);
	const [lastPos, setLastPos] = useState<ILastPos>({
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
		}
	}, [canvas]);

	// DRAG the canvas

	useEffect(() => {
		if (canvas) {
			canvas.on("mouse:down", (opt) => {
				console.log("mouse down");
				const e = opt.e;
				if (e.altKey) {
					setSelection(() => false);
					setLastPos(() => ({
						lastPosX: e.clientX,
						lastPosY: e.clientY,
					}));
				}
			});
		}
	}, [canvas]);

	useEffect(() => {
		if (canvas) {
			canvas.on("mouse:move", (opt) => {
				const e = opt.e;
				if (e.altKey) {
					debounce(() => {
						console.log("mouse move");
						let vpt = canvas.viewportTransform;
						if (vpt) vpt[4] += e.clientX - lastPos.lastPosX;
						if (vpt) vpt[5] += e.clientY - lastPos.lastPosY;
						canvas.requestRenderAll();
						setLastPos(() => ({
							lastPosX: e.clientX,
							lastPosY: e.clientY,
						}));
					}, 500)();
				}
			});
		}
	}, [canvas]);

	useEffect(() => {
		if (canvas) {
			canvas.on("mouse:up", (opt) => {
				const vpt = canvas.viewportTransform;
				if (vpt) canvas.setViewportTransform(vpt);
				setSelection(() => true);

				console.log("mouse up");
			});
		}
	}, [canvas]);

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
