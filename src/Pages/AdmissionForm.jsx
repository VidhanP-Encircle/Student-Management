import { useState } from "react";
import { Formik, Form } from "formik";
import PersonalStep from "../Components/Admission/Steps/PersonalStep";
import AcademicStep from "../Components/Admission/Steps/AcademicStep";
import SkillStep from "../Components/Admission/Steps/SkillSteps";
import ReviewStep from "../Components/Admission/Steps/ReviewStep";
import { validationSchemas } from "../Components/Admission/admissionValidation";

const AdmissionForm = () => {
  const [step, setStep] = useState(0);

  const steps = [
    <PersonalStep />,
    <AcademicStep />,
    <SkillStep />,
    <ReviewStep />,
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    semester: "",
    skills: [],
  };

  const isLastStep = step === steps.length - 1;

  const handleSubmit = (values, actions) => {
    if (!isLastStep) {
      setStep((prev) => prev + 1);

      actions.setTouched({});
      actions.setSubmitting(false);

      return;
    }

    console.log("Admission Submitted", values);

    alert("Admission Submitted Successfully");
    actions.resetForm();
    setStep(0);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Admission Wizard</h1>

      <div className="mb-6">
        Step {step + 1} of {steps.length}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          {steps[step]}

          <div className="flex justify-between">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Previous
              </button>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AdmissionForm;
