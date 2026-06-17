import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStudents } from "../../utils/studentService";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (_, thunkAPI) => {
    try {
      const data = await getStudents();

      return data.map((student) => ({
        id: student.id,
        name: student.name,
        email: student.email,
        course: "React",
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch students");
    }
  },
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })

      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
