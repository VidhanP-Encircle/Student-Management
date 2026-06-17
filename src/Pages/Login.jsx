import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());

    navigate("/admission");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fake Login
      </button>
    </div>
  );
};

export default Login;
