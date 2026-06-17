import { Field, ErrorMessage } from "formik";

const AcademicStep = () => {
  return (
    <div className="space-y-4">
      <div>
        <label>Course</label>

        <Field as="select" name="course" className="w-full border p-2 rounded">
          <option value="">Select Course</option>

          <option value="React">React</option>

          <option value="Node">Node</option>

          <option value="MERN">MERN</option>
        </Field>

        <ErrorMessage
          name="course"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label>Semester</label>

        <Field name="semester" className="w-full border p-2 rounded" />

        <ErrorMessage
          name="semester"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default AcademicStep;
