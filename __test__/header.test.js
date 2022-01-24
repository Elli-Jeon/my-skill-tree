import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "components/Header";

describe("Header", () => {
	it("header의 사이트명", () => {
		render(<Header />);

		const siteName = screen.getByText("My Tech Tree");

		expect(siteName).toBeInTheDocument();
	});
});
