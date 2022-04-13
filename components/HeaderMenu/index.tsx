import React from "react";
import Paper from "components/Paper";
import AddIcon from "public/vectors/menu/add.svg";
import SearchIcon from "public/vectors/menu/search.svg";
import ListIcon from "public/vectors/menu/list.svg";
import Divider from "components/Divider";
import * as S from "./styles";

const HeaderMenu = () => {
	return (
		<Paper width={240} height={40}>
			<S.Container>
				<AddIcon className="icon" />
				<Divider />
				<SearchIcon className="icon" />
				<ListIcon className="icon" />
				<div className="image" />
			</S.Container>
		</Paper>
	);
};

export default HeaderMenu;
