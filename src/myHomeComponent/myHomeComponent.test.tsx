import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyHomeComponent from "./myHomeComponent";

describe("<myHomeComponent />", () => {
  test("it should mount", () => {
    render(<MyHomeComponent />);

    const myHomeComponent = screen.getByTestId("myHomeComponent");

    expect(myHomeComponent).toBeInTheDocument();
  });
});
