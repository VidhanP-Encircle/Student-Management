import { Field, ErrorMessage } from "formik";

const PersonalStep = () => {
  return (
    <div className="space-y-4">
      <div>
        <label>First Name</label>

        <Field name="firstName" className="w-full border p-2 rounded" />

        <ErrorMessage
          name="firstName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label>Last Name</label>

        <Field name="lastName" className="w-full border p-2 rounded" />

        <ErrorMessage
          name="lastName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label>Email</label>

        <Field
          name="email"
          type="email"
          className="w-full border p-2 rounded"
        />

        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default PersonalStep;
