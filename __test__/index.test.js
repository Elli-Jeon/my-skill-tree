// __tests__/index.test.jsx

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "pages/index";

describe("Home", () => {
	it("제목", () => {
		render(<Home />);

		const heading = screen.getByText("My Tech Tree");

		expect(heading).toBeInTheDocument();
	});

	it("만든 사람", () => {
		render(<Home />);

		const madeBy = screen.getByText("Elli-Jeon");

		expect(madeBy).toBeInTheDocument();
	});

	it("version", () => {
		render(<Home />);

		const version = screen.getByText("ver1.0");

		expect(version).toBeInTheDocument();
	});

	it("이미지", () => {
		render(<Home />);

		const kakao = screen.getByAltText("kakao");
		const google = screen.getByAltText("google");

		[github, email, kakao, google].forEach((ele) => {
			expect(ele).toBeInTheDocument();
		});
	});
});
