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
      const data = await axios.get(
        "https://wild-insidious-parsnip.glitch.me/todos"
      );
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
    toggleStatusTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload && todo.progress === "plan") {
            return {
              ...todo,
              progress: "working",
            };
          } else if (
            todo.id === action.payload &&
            todo.progress === "working"
          ) {
            return {
              ...todo,
              progress: "done",
            };
          } else if (todo.id === action.payload && todo.progress === "done") {
            return {
              ...todo,
              progress: "working",
            };
          } else {
            return todo;
          }
        }),
      };
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

export const { toggleStatusTodo } = todosSlice.actions;
export default todosSlice.reducer;
