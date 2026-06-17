import { Field, ErrorMessage } from "formik";

const skills = ["React", "Node", "MongoDB", "Express"];

const SkillStep = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Skills</h3>

      {skills.map((skill) => (
        <label key={skill} className="block mb-2">
          <Field type="checkbox" name="skills" value={skill} />

          <span className="ml-2">{skill}</span>
        </label>
      ))}

      <ErrorMessage
        name="skills"
        component="div"
        className="text-red-500 text-sm mt-2"
      />
    </div>
  );
};

export default SkillStep;
