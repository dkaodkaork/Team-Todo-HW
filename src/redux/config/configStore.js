import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
//modules
import todos from "../modules/todosSlice";
import todo from "../modules/todo";
import commentsReducer from "../modules/commentsReducer";

const rootReducer = combineReducers({
  todos: todos,
  todo: todo,
  comments: commentsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
