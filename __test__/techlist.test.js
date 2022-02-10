import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TechList from "pages/techlist";

describe("techlist page", () => {
	it("front end list", () => {
		render(<TechList />);

		const listName = screen.getByText("프론트엔드");
		expect(listName).toBeInTheDocument();
	});
});
