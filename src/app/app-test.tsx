import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./app";

describe("SETOUCHI AZURE landing page", () => {
  it("displays the hero and every major section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "瀬戸内の静けさに、泊まる。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "何もしない時間が、いちばん贅沢になる。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "すべての客室から、瀬戸内海を。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "瀬戸内を、一皿の中に。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "海に身をゆだねるような、静かな時間。",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Setouchi,Japan." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "ここでしか流れない時間を。",
      }),
    ).toBeInTheDocument();
  });

  it("renders three rooms and three experiences from shared data", () => {
    render(<App />);

    expect(screen.getAllByTestId("room")).toHaveLength(3);
    expect(screen.getAllByTestId("experience")).toHaveLength(3);
    expect(
      screen.getByRole("heading", { level: 3, name: "AZURE SUITE" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "PRIVATE CRUISE" }),
    ).toBeInTheDocument();
  });

  it("opens and closes the mobile menu with accessible state management", async () => {
    const user = userEvent.setup();
    render(<App />);

    const menuButton = screen.getByRole("button", { name: "MENU" });
    const main = screen.getByRole("main");
    const footer = screen.getByRole("contentinfo");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(menuButton).toHaveTextContent("CLOSE");
    expect(main).toHaveAttribute("inert");
    expect(footer).toHaveAttribute("inert");

    await user.keyboard("{Escape}");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
    expect(main).not.toHaveAttribute("inert");
    expect(footer).not.toHaveAttribute("inert");
  });
});
