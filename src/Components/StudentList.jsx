import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
