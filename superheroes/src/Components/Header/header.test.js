import React from "react";
import Header from "./Header";
import { unmountComponentAtNode } from "react-dom";
import {render, screen, waitFor} from '@testing-library/react'

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test header", () => {
  test("Smoke test for header", () => {
		render(<Header />)
	});
});
