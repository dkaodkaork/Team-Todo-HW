import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_DB_URL}/todos`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    __patchTodos: (state, action) => {
      console.log(action); // payload

      console.log(action.payload.data);
      const edittodo = action.payload.data;
      const { todos } = state;
      const tempTodos = [...todos];
      console.log(tempTodos); // Store에 있는 값 복사
      const index = todos.findIndex((todo) => todo.id === edittodo.id); // 바꾸고자하는 거 찾아주고
      tempTodos.splice(index, 1, edittodo); // patch한 todo를 찾아서 변경
      console.log(tempTodos);

      return { ...state, todos: tempTodos };
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { toggleStatusTodo, __patchTodos } = todosSlice.actions;
export default todosSlice.reducer;
