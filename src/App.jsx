import React from "react";
import AppRoutes from "./Navigation/AppRoutes";
import Navbar from "./Components/Navbar";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
