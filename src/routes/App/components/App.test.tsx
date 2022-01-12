import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import App from "./App";

test("App renders with correct h1 text", () => {
  const component = render (<App/>);
	const header = component.getByTestId("header");

	expect(header.textContent).toBe("Packative Dark Mode");
});
