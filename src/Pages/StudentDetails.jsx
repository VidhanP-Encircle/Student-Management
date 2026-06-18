import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchStudents } from "../Redux/Slices/studentSlice";

const StudentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { students, loading, error } = useSelector((state) => state.students);
  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    if (students.length === 0) {
      dispatch(fetchStudents());
    }
    setIsInitialMount(false);
  }, [students.length]);

  const student = students.find((student) => student.id === Number(id));

  if (loading || isInitialMount) {
    return (
      <div className="bg-white p-6 rounded shadow text-gray-900">
        Loading Student Details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded shadow text-red-500">{error}</div>
    );
  }

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
