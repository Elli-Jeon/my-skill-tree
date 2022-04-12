import React from "react";
import Paper from "components/Paper";
import AddImageIcon from "public/vectors/nodemenu/add-image.svg";
import AddNodeIcon from "public/vectors/nodemenu/add-node.svg";
import CompassIcon from "public/vectors/nodemenu/compass.svg";
import ConnectNodeIcon from "public/vectors/nodemenu/connect-node.svg";
import EditFontIcon from "public/vectors/nodemenu/edit-font.svg";
import ShowNeighborsIcon from "public/vectors/nodemenu/show-neighbors.svg";
import * as S from "./styles";

const NodeMenu = () => {
	return (
		<Paper width={630} height={90}>
			<S.Container>
				<CompassIcon></CompassIcon>
				<AddImageIcon></AddImageIcon>
				<AddNodeIcon></AddNodeIcon>
				<ConnectNodeIcon></ConnectNodeIcon>
				<EditFontIcon></EditFontIcon>
				<ShowNeighborsIcon></ShowNeighborsIcon>
			</S.Container>
		</Paper>
	);
};

export default NodeMenu;
