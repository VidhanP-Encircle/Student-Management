import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = "text-blue-600 font-semibold";

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Students
        </NavLink>

        <NavLink
          to="/add-student"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Add Student
        </NavLink>

        <NavLink
          to="/admission"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Admission
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
