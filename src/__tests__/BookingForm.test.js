import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import "@testing-library/jest-dom";

describe("BookingForm", () => {
  test("renders booking form with all inputs", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test("disables submit if inputs are empty", () => {
    render(<BookingForm />);
    const button = screen.getByRole("button", { name: /Make Reservation/i });
    expect(button).toBeDisabled();
  });

  test("enables submit when valid data entered", () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-06-27" } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "3" } });

    const button = screen.getByRole("button", { name: /Make Reservation/i });
    expect(button).toBeEnabled();
  });

  test("updates time options when date changes", () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-06-28" } });
    const option = screen.getByRole("option", { name: "18:00" });
    expect(option).toBeInTheDocument();
  });
});
