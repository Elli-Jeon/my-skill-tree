import React from "react";
import Image from "next/image";
import Menu from "components/Menu";
import * as S from "./styles";

const Header = () => {
	return (
		<S.Container>
			<S.Logo>
				<Image src="/logo/logo.png" width="56px" height="56px" layout="fixed" />
				<span>My Skill Tree</span>
			</S.Logo>
			<Menu />
		</S.Container>
	);
};

export default Header;
