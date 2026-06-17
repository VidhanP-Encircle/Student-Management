import StatCard from "../Components/StatCard";
import useCounter from "../hooks/useCounter";

const Dashboard = () => {
  const { count, increment, decrement } = useCounter(10, 1);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-5">
        <StatCard title="Total Students" value="120" />
        <StatCard title="Active Students" value="95" />
        <StatCard title="Courses" value="8" />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Addmission Counter</h2>
        <p className="text-3xl mb-4">{count}</p>

        <div className="flex gap-3">
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
