import React, { useCallback, useState } from "react";
import { throttle } from "lodash";

const useCanvasZoom = () => {
	const [stageScale, setStageScale] = useState(1);
	const [stageX, setStageX] = useState(0);
	const [stageY, setStageY] = useState(0);

	const throttledMouseWheel = useCallback(
		throttle((e) => {
			const scaleBy = 1.12;
			const stage = e.target.getStage();
			const oldScale = stage.scaleX();
			const mousePointTo = {
				x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
				y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
			};

			const newScale =
				e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

			setStageScale(() => newScale);
			setStageX(
				() =>
					-(mousePointTo.x - stage.getPointerPosition().x / newScale) *
					newScale,
			);
			setStageY(
				() =>
					-(mousePointTo.y - stage.getPointerPosition().y / newScale) *
					newScale,
			);
		}, 90),
		[],
	);

	const handleMouseWheel = useCallback(
		(e) => {
			e.evt.preventDefault();
			throttledMouseWheel(e);
		},
		[throttledMouseWheel],
	);

	return { stageScale, stageX, stageY, handleMouseWheel };
};

export default useCanvasZoom;
