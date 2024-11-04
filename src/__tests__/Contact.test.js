import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

// Grouping the test cases

describe("Contact Us Page test cases", () => {
  beforeAll(() => {
    // before all the test cases this will run
  });

  beforeEach(() => {
    // before each test case this will run
  });

  afterAll(() => {
    // after all the test cases this will run
  });

  afterEach(() => {
    // after each test case this will run
  });

  // defining a test case
  test("Should load the heading in the contact component", () => {
    // render
    render(<Contact />);

    // query
    const heading = screen.getByRole("heading");

    //assert
    expect(heading).toBeInTheDocument();
  });

  // it is alias of test
  it("Should load the button in the contact component", () => {
    // render
    render(<Contact />);

    // query
    const submit = screen.getByText("Submit");

    //assert
    expect(submit).toBeInTheDocument();
  });

  test("Should load 2 input boxes in the contact component", () => {
    // render
    render(<Contact />);

    // query
    const input = screen.getAllByRole("textbox");

    //assert
    expect(input.length).toBe(2);
  });
});
