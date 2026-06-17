import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentDetails = () => {
  const { id } = useParams();

  const { students } = useSelector((state) => state.students);
  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-red-500">Student Not Found</h2>

        <Link
          to="/students"
          className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back To Students
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">Student Details</h1>

      <div className="space-y-3">
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>
      </div>

      <Link
        to="/students"
        className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back To Students
      </Link>
    </div>
  );
};

export default StudentDetails;
