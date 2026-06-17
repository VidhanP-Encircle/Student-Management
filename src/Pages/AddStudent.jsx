import { useState } from "react";

const skillSet = ["React", "Node", "Express"];

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillChnage = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({ ...prev, skills: [...prev.skills, value] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill !== value),
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationsError = validate();

    if (Object.keys(validationsError).length > 0) {
      setErrors(validationsError);
      return;
    }

    setErrors({});
    setSubmittedData(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      skills: [],
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Add Students</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <p className="mb-2 font-medium">Gender</p>

            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <span className="ml-1">Male</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <span className="ml-1">Female</span>
            </label>

            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          <div>
            <p className="mb-2 font-medium">Skills</p>

            {skillSet.map((skill) => (
              <label key={skill} className="mr-4">
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillChnage}
                />
                <span className="ml-1">{skill}</span>
              </label>
            ))}

            {errors.skills && (
              <p className="text-red-500 text-sm">{errors.skills}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="bg-white mt-6 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Submitted Data</h2>

          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>

          <p>
            <strong>Skills:</strong> {submittedData.skills.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
