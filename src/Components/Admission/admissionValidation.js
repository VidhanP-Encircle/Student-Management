import * as Yup from "yup";

export const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
  }),

  Yup.object({
    course: Yup.string().required("Course is required"),
    semester: Yup.number()
      .typeError("Enter only a number")
      .required("Semester is required"),
  }),

  Yup.object({
    skills: Yup.array()
      .of(Yup.string().trim().required("Skill cannot be empty"))
      .min(1, "Select at least one skill"),
  }),

  Yup.object({}),
];
