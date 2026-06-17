import axios from "axios";

export const getStudents = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );

  return response.data;
};
