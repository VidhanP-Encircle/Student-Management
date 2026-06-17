import { useTheme } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-4">
      <p className="text-lg">
        Current Theme:
        <strong className="ml-2">{theme}</strong>
      </p>

      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
