import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Students from "../Pages/Students";
import Settings from "../Pages/Settings";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Dashboard";
import AddStudent from "../Pages/AddStudent";
import StudentDetails from "../Pages/StudentDetails";
import ProtectedRoute from "../Components/ProtectedRoute";
const AdmissionForm = lazy(() => import("../Pages/AdmissionForm"));
const Login = lazy(() => import("../Pages/Login"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <AdmissionForm />
            </ProtectedRoute>
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
