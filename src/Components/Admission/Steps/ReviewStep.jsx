import { useFormikContext } from "formik";

const ReviewStep = () => {
  const { values } = useFormikContext();

  return (
    <div className="space-y-2">
      <p>First Name: {values.firstName}</p>

      <p>Last Name: {values.lastName}</p>

      <p>Email: {values.email}</p>

      <p>Course: {values.course}</p>

      <p>Semester: {values.semester}</p>

      <p>Skills: {values.skills.join(", ")}</p>
    </div>
  );
};

export default ReviewStep;
