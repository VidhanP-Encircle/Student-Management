import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getStudents } from "../utils/studentService";

import SearchBar from "../Components/SearchBar";
import StudentList from "../Components/StudentList";
import { fetchStudents } from "../Redux/Slices/studentSlice";

const Students = () => {
  const dispatch = useDispatch();

  const { students, loading, error } = useSelector((state) => state.students);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [students, searchTerm]);

  const handleRefresh = useCallback(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded shadow">Loading Students...</div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded shadow text-red-500">{error}</div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Students</h1>

      <button
        onClick={handleRefresh}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Refresh Students
      </button>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <StudentList students={filteredStudents} />
    </div>
  );
};

export default Students;
