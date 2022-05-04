import React, { useCallback, useState } from "react";
import { throttle } from "lodash";
import type { KonvaEventObject } from "konva/lib/Node";

const useCanvasZoom = () => {
	const [stageScale, setStageScale] = useState(1);
	const [stageX, setStageX] = useState(0);
	const [stageY, setStageY] = useState(0);

	const throttledMouseWheel = useCallback(
		throttle((e: KonvaEventObject<WheelEvent>) => {
			const scaleBy = 1.12;
			const stage = e.target.getStage();

			if (stage) {
				const oldScale = stage.scaleX();

				const { x: stageX, y: stageY } = stage.getPointerPosition() || {};

				if (stageX && stageY) {
					const mousePointTo = {
						x: stageX / oldScale - stage.x() / oldScale,
						y: stageY / oldScale - stage.y() / oldScale,
					};

					const newScale =
						e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

					setStageScale(() => newScale);
					setStageX(() => -(mousePointTo.x - stageX / newScale) * newScale);
					setStageY(() => -(mousePointTo.y - stageY / newScale) * newScale);
				}
			}
		}, 90),
		[],
	);

	const handleMouseWheel = useCallback(
		(e: KonvaEventObject<WheelEvent>) => {
			e.evt.preventDefault();
			throttledMouseWheel(e);
		},
		[throttledMouseWheel],
	);

	return { stageScale, stageX, stageY, handleMouseWheel };
};

export default useCanvasZoom;
