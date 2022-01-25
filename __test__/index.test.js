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

	it("외부 링크 연결", () => {
		render(<Home />);

		const github = screen.getByRole("link", { name: "github" });
		const email = screen.getByRole("link", { name: "email" });

		expect(github).toHaveAttribute("href", "https://github.com/Elli-Jeon");
		expect(email).toHaveAttribute("href", "mailto:raverena96@gmail.com");
	});
});
