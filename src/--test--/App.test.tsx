import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import App from "../App";
vi.mock("../features/Home/HomePage", () => {
  return {
    default: () => <div>Mocked HomePage</div>,
  };
});

describe("App component", () => {
  it("renders the HomePage component", () => {
    render(<App />);

    expect(screen.getByText("Mocked HomePage")).toBeInTheDocument();
  });
});
