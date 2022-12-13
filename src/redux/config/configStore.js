// src / redux / config / configStore.js;

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

import todos from "../modules/todosSlice";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import todolist from "../modules/todolist";

// const rootReducer = combineReducers({
//   todolist: todolist,
// });
// const store = createStore(rootReducer);

// export default store;
