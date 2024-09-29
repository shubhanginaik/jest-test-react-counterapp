import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

describe("Counter", () => {
  it("Counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValueText = screen.getByTestId("count").textContent; // Get the text content of the count element
    const countValue = Number(countValueText.split(": ")[1]); // Split to extract the numerical value
    // Expect the count value to equal 0
    expect(countValue).toEqual(0);
  });

  it("Counter increment by 1 if the increment button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    // Simulate a click on the increment button
    fireEvent.click(incrementBtn);

    // After clicking, get the updated count
    const countValueText = screen.getByTestId("count").textContent;
    const countValue = Number(countValueText.split(":")[1]);
    expect(countValue).toEqual(1);
  });

  it("Counter decrement by 1 if the decrement button is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);

    const countValueText = screen.getByTestId("count").textContent;
    const countValue = Number(countValueText.split(":")[1]);
    expect(countValue).toEqual(-1);
  });

  it("Counter restarts if the restart button is clicked", () => {
    render(<Counter initialCount={2} />);
    const restartBtn = screen.getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);

    const countValueText = screen.getByTestId("count").textContent;
    const countValue = Number(countValueText.split(":")[1]);
    expect(countValue).toEqual(0);
  });

  it("sign chnanges if the switch sign is pressed", () => {
    render(<Counter initialCount={2} />);
    const restartBtn = screen.getByRole("button", { name: "Switch Sign" });
    fireEvent.click(restartBtn);

    const countValueText = screen.getByTestId("count").textContent;
    const countValue = Number(countValueText.split(":")[1]);
    expect(countValue).toEqual(-2);
  });
});
