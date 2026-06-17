import { render } from "@testing-library/react";
import StudentCard from "../Components/StudentCard";
import { BrowserRouter } from "react-router-dom";

describe("StudentCard Snapshot", () => {
  test("matches snapshot", () => {
    const student = {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      course: "React",
    };

    const { container } = render(
      <BrowserRouter>
        <StudentCard student={student} />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
