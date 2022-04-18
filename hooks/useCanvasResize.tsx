import type { Canvas } from "fabric/fabric-impl";
import React, { useEffect, useState } from "react";

interface IuseCanvasResizeProps {
	canvas: Canvas | null;
	ref: React.RefObject<HTMLDivElement>;
}

const useCanvasResize = ({ canvas, ref }: IuseCanvasResizeProps) => {
	useEffect(() => {
		const handleResize = () => {
			if (canvas && ref.current) {
				const width = ref.current.offsetWidth;
				const height = ref.current.offsetHeight;
				canvas.setWidth(width);
				canvas.setHeight(height);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // 맨처음 load때 값 반영

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return;
};

export default useCanvasResize;
