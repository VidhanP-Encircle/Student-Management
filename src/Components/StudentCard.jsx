import { memo } from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white shadow rounded-lg p-5">
      <h2 className="text-xl font-bold">{student.name}</h2>

      <p className="text-gray-600 mt-1">{student.email}</p>

      <p className="mt-2">
        <strong>Course:</strong> {student.course}
      </p>

      <Link
        to={`/students/${student.id}`}
        className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
};

export default memo(StudentCard);
