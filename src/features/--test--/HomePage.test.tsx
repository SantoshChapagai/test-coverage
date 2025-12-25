import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../Home/HomePage";

describe("HomePage Calculator", () => {
  it("renders calculator title", () => {
    render(<HomePage />);
    expect(screen.getByText("Calculator")).toBeInTheDocument();
  });

  it("renders two input fields", () => {
    render(<HomePage />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);
  });

  it("updates first input value", () => {
    render(<HomePage />);
    const [firstInput] = screen.getAllByRole("textbox");

    fireEvent.change(firstInput, { target: { value: "10" } });

    expect(firstInput).toHaveValue("10");
  });

  it("updates second input value", () => {
    render(<HomePage />);
    const [, secondInput] = screen.getAllByRole("textbox");

    fireEvent.change(secondInput, { target: { value: "5" } });

    expect(secondInput).toHaveValue("5");
  });

  it("adds two numbers correctly", () => {
    render(<HomePage />);
    const [first, second] = screen.getAllByRole("textbox");

    fireEvent.change(first, { target: { value: "10" } });
    fireEvent.change(second, { target: { value: "5" } });

    fireEvent.click(screen.getByText("+"));

    expect(screen.getByText("Result: 15")).toBeInTheDocument();
  });

  it("subtracts two numbers correctly", () => {
    render(<HomePage />);
    const [first, second] = screen.getAllByRole("textbox");

    fireEvent.change(first, { target: { value: "10" } });
    fireEvent.change(second, { target: { value: "5" } });

    fireEvent.click(screen.getByText("-"));

    expect(screen.getByText("Result: 5")).toBeInTheDocument();
  });

  it("multiplies two numbers correctly", () => {
    render(<HomePage />);
    const [first, second] = screen.getAllByRole("textbox");

    fireEvent.change(first, { target: { value: "4" } });
    fireEvent.change(second, { target: { value: "3" } });

    fireEvent.click(screen.getByText("*"));

    expect(screen.getByText("Result: 12")).toBeInTheDocument();
  });

  it("divides two numbers correctly", () => {
    render(<HomePage />);
    const [first, second] = screen.getAllByRole("textbox");

    fireEvent.change(first, { target: { value: "20" } });
    fireEvent.change(second, { target: { value: "4" } });

    fireEvent.click(screen.getByText("/"));

    expect(screen.getByText("Result: 5")).toBeInTheDocument();
  });

  it("handles division by zero", () => {
    render(<HomePage />);
    const [first, second] = screen.getAllByRole("textbox");

    fireEvent.change(first, { target: { value: "10" } });
    fireEvent.change(second, { target: { value: "0" } });

    fireEvent.click(screen.getByText("/"));

    expect(screen.getByText("Result: Infinity")).toBeInTheDocument();
  });
});
