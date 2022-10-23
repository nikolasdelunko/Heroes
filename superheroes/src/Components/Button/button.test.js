import { render } from "@testing-library/react";
import Button from "./Button";

describe("Test Button", () => {
  test("Smoke test for Button", () => {
    render(<Button />);
  });

  test("Button shows datat if provided in props", () => {
    const { getByTestId, getByText } = render(
      <Button
        onClick={() => console.log("aa")}
        text={"textBtn"}
        disabled={false}
        type="submit"
        classN="control-btn form-btn"
      />
    );
		getByTestId("button-element")
		getByText("textBtn")
  });
});

describe("snapshot Testing", ()=> {
	test('Button snapshot', ()=> {
		const {container} = render(<Button />)
		expect(container.innerHTML).toMatchSnapshot()
	})
})
