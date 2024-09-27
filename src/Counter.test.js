import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter"; // Ensure this path is correct

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValueText = screen.getByTestId("count").textContent; // Get the text content of the count element
    const countValue = Number(countValueText.split(": ")[1]); // Split to extract the numerical value

    // Expect the count value to equal 0
    expect(countValue).toEqual(0);
  });
});
