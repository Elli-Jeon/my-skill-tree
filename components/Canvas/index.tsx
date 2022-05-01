import React from "react";
import useCanvasZoom from "hooks/useCanvasZoom";
import { Stage, Layer, Rect } from "react-konva";

// 서버에는 window가 없기때문에 dynamic으로 import 해야 함.

const Canvas = () => {
	const { stageScale, stageX, stageY, handleMouseWheel } = useCanvasZoom();

	return (
		<Stage
			width={window.innerWidth}
			height={window.innerHeight - 56}
			draggable
			onWheel={handleMouseWheel}
			scaleX={stageScale}
			scaleY={stageScale}
			x={stageX}
			y={stageY}
		>
			<Layer>
				<Rect
					x={20}
					y={50}
					width={100}
					height={100}
					fill="red"
					shadowBlur={10}
				></Rect>
			</Layer>
		</Stage>
	);
};

export default Canvas;
