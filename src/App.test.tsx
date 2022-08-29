import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/App";
import {
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { MenuItem, Select } from "@mui/material";

test("the selector renders the city the user picked", async () => {
  render(<App />);
  await UserEvent.click(getByRole(screen.getByTestId("city"), "button"));
  waitFor(() => UserEvent.click(screen.getByText("Paris")));
  expect(screen.getByText("Paris"));
});

describe("App home page", () => {
  it("renders the home page", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should correctly set default option", () => {
    render(<App />);
    const header = screen.getByText("Buenos Aires");
    expect(header).toBeInTheDocument();
  });

  it("renders a selector that shows five city options", () => {
    const { getByRole } = render(
      <>
        <Select defaultValue="Buenos Aires">
          <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
          <MenuItem value="Cordoba">Córdoba</MenuItem>
          <MenuItem value="Quebec">Québec</MenuItem>
          <MenuItem value="Paris">Paris</MenuItem>
          <MenuItem value="Beijing">Beijing</MenuItem>
        </Select>
      </>
    );

    fireEvent.mouseDown(getByRole("button"));
    expect(getByRole("listbox")).toHaveTextContent("Paris");
    expect(getByRole("listbox")).toHaveTextContent("Québec");
    expect(getByRole("listbox")).toHaveTextContent("Buenos Aires");
    expect(getByRole("listbox")).toHaveTextContent("Córdoba");
  });
});
