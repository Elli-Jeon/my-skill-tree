import React, { useCallback, useState } from "react";
import type { MouseEvent } from "react";
import type { KonvaEventObject } from "konva/lib/Node";
import { Stage, Layer, Rect } from "react-konva";
import useCanvasZoom from "hooks/useCanvasZoom";
import Node from "components/Node";

// 서버에는 window가 없기때문에 dynamic으로 import 해야 함.

const Canvas = () => {
	const { stageScale, stageX, stageY, handleMouseWheel } = useCanvasZoom();

	const handleMouseDown = (evt: KonvaEventObject<globalThis.MouseEvent>) => {
		console.log(evt.target.getStage()?.getPointerPosition());
	};

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
			onMouseDown={handleMouseDown}
		>
			<Layer>
				<Node></Node>
			</Layer>
		</Stage>
	);
};

export default Canvas;
