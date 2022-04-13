import React, { useCallback, useState } from "react";
import Paper from "components/Paper";
import Divider from "components/Divider";
import SVGIcon from "components/SVGIcon";
import AddImageIcon from "public/vectors/nodemenu/add-image.svg";
import AddNodeIcon from "public/vectors/nodemenu/add-node.svg";
import CompassIcon from "public/vectors/nodemenu/compass.svg";
import ConnectNodeIcon from "public/vectors/nodemenu/connect-node.svg";
import EditFontIcon from "public/vectors/nodemenu/edit-font.svg";
import ShowNeighborsIcon from "public/vectors/nodemenu/show-neighbors.svg";
import * as S from "./styles";

const NodeMenu = () => {
	const [showMenu, setShowMenu] = useState(true);

	const handleShowMenu = useCallback(() => setShowMenu((prev) => !prev), []);

	return (
		<Paper width={630} height={90}>
			<S.Container>
				<SVGIcon onClick={handleShowMenu}>
					<CompassIcon />
				</SVGIcon>
				<S.NodeActions className={showMenu ? "show" : "hide"}>
					<SVGIcon>
						<AddNodeIcon />
					</SVGIcon>
					<Divider />
					<SVGIcon>
						<AddImageIcon />
					</SVGIcon>
					<SVGIcon>
						<ConnectNodeIcon />
					</SVGIcon>
					<SVGIcon>
						<EditFontIcon />
					</SVGIcon>
					<SVGIcon>
						<ShowNeighborsIcon />
					</SVGIcon>
				</S.NodeActions>
			</S.Container>
		</Paper>
	);
};

export default NodeMenu;
