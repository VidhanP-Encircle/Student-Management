import { render, screen } from "@testing-library/react";
import StudentCard from "../Components/StudentCard";
import { BrowserRouter } from "react-router-dom";

describe("StudentCard", () => {
  const student = {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    course: "React",
  };

  test("renders student information", () => {
    render(
      <BrowserRouter>
        <StudentCard student={student} />
      </BrowserRouter>,
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByText("john@gmail.com")).toBeInTheDocument();

    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });
});
