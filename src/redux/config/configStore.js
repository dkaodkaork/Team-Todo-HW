import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import todos from "../modules/todosSlice";

import todo from "../modules/todo";
import commentsReducer from "../modules/commentsReducer";

const rootReducer = combineReducers({
  comments: commentsReducer, todo: todo, todos:todos
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


