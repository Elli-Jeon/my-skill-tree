import React from "react";
import { Group, Rect } from "react-konva";

const Node = () => {
	return (
		<Group draggable>
			<Rect
				x={100}
				y={40}
				width={200}
				height={90}
				fill="transparent"
				stroke="red"
				strokeWidth={3}
				shadowBlur={10}
			/>
		</Group>
	);
};

export default Node;
