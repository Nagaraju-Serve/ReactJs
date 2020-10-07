import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyChild from "./myChild";

describe("<myChild />", () => {
  test("it should mount", () => {
    render(<MyChild label="Services" />);

    const myChild = screen.getByTestId("myChild");

    expect(myChild).toBeInTheDocument();
  });
});
