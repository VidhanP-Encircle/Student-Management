import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "../Components/ThemeToggle";
import { ThemeProvider } from "../Context/ThemeContext";

describe("ThemeToggle", () => {
  test("toggles theme", async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole("button");

    expect(screen.getByText(/light/i)).toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByText(/dark/i)).toBeInTheDocument();
  });
});
