import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Body from "./Body";

describe("Body Component", () => {
  it("renders the component correctly", () => {
    render(<Body />);

    expect(screen.getByText("Чіп Чендж")).toBeInTheDocument();
    expect(screen.getByText("Обмінник валют - навчальний")).toBeInTheDocument();
    expect(screen.getByText("Конвертер валют")).toBeInTheDocument();
  });

  it("renders background image correctly", () => {
    render(<Body />);
    const background = screen.getByRole("region");
    expect(background).toHaveStyle(
      "background-image: url('/images/Rectangle 2.png')"
    );
  });

  it("renders the card image correctly", () => {
    render(<Body />);
    const cardImage = screen.getByAltText("Карта");
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute(
      "src",
      "/images/standard-mastercard-card-debit_1280x720 2.png"
    );
  });

  it("handles button click", async () => {
    render(<Body />);
    const button = screen.getByText("Конвертер валют");

    await userEvent.click(button);
    // Логику пока не сделал, поэтому просто тестируем наличиу
    expect(button).toBeInTheDocument();
  });
});
