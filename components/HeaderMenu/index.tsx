import React from "react";
import Paper from "components/Paper";
import AddIcon from "public/vectors/add.svg";
import SearchIcon from "public/vectors/search.svg";
import ListIcon from "public/vectors/list.svg";
import * as S from "./styles";

const HeaderMenu = () => {
	return (
		<Paper>
			<S.Container>
				<AddIcon className="icon" />
				<S.Divider />
				<SearchIcon className="icon" />
				<ListIcon className="icon" />
				<div className="image" />
			</S.Container>
		</Paper>
	);
};

export default HeaderMenu;
