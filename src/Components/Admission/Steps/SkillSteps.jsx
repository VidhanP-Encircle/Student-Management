import { ErrorMessage, Field, FieldArray } from "formik";

const SkillStep = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Skills</h3>

      <FieldArray name="skills">
        {({ push, remove, form }) => (
          <>
            {form.values.skills.map((_, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Field
                  name={`skills.${index}`}
                  placeholder="Enter skill"
                  className="border px-3 py-2 rounded"
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-3 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => push("")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Skill
            </button>
          </>
        )}
      </FieldArray>

      <ErrorMessage
        name="skills"
        component="div"
        className="text-red-500 text-sm mt-2"
      />
    </div>
  );
};

export default SkillStep;
