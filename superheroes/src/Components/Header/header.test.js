import React from "react";
import Header from "./Header";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test header", () => {
  test("Smoke test for header", () => {
    render(<Header />);
  });
});

test("defulat title is YOU HERO LIST", () => {
  const { getByText } = render(<Header />);
  getByText("You hero list")
});
