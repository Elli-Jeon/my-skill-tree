import type { Canvas } from "fabric/fabric-impl";
import React, { useEffect, useState } from "react";

type IuseCanvasResizeProps = Canvas | null;

// 문제점. 너무 크게 조절했다가 다시 돌아오면 늘어난게 줄어들지는 않음.
const useCanvasResize = (canvas: IuseCanvasResizeProps) => {
	useEffect(() => {
		const handleResize = () => {
			if (canvas) {
				// 화면 전체 크기에 맞게 조절
				const width = window.innerWidth;
				const height = window.innerHeight - 56;

				canvas.setWidth(width);
				canvas.setHeight(height);

				canvas.renderAll();
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // 맨처음 load때 값 반영

		return () => window.removeEventListener("resize", handleResize);
	}, [canvas]);

	return;
};

export default useCanvasResize;
