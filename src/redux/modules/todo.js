// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 학습",
      content: "학습1",
      progress: "plan",
      when: "morning",
      date: "now-date",
    },
  ],
};

// Reducer
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

// export default reducer
export default todo;
