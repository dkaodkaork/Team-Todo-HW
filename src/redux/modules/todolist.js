// // Action value
// const ADD_TODO = "ADD_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// // Action Creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// initial State
const initialState = {
  todolist: [
    {
      id: "1",
      title: "plan1",
      content: "리액트 어려워요",
      progress: "plan",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "10",
      title: "plan2",
      content: "리액트 어려워요",
      progress: "plan",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "0",
      title: "Working1",
      content: "리액트 어려워요",
      progress: "working",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "2",
      title: "Working3",
      content: "리액트 어려워요",
      progress: "working",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "3",
      title: "done1",
      content: "리액트 어려워요",
      progress: "done",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "5",
      title: "done2",
      content: "리액트 어려워요",
      progress: "done",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "6",
      title: "Working2",
      content: "리액트 어려워요",
      progress: "working",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "7",
      title: "plan3",
      content: "리액트 어려워요",
      progress: "plan",
      when: "morning",
      date: "2022-12-10",
    },
    {
      id: "8",
      title: "done3",
      content: "리액트 어려워요",
      progress: "done",
      when: "morning",
      date: "2022-12-10",
    },
  ],

  todo: {
    id: "0",
    title: "todo1",
    content: "todo1",
    progress: "plan",
    when: "morning",
    date: "2022-12-10",
    comments: [
      {
        commentId: 1,
        comment: "댓글1",
        username: "이현정",
        createDate: "2022-12-10",
        editCheck: false,
      },
    ],
  },
};

// Reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todolist: state.todolist.map((todo) => {
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

    default:
      return state;
  }
};
export default todolist;
