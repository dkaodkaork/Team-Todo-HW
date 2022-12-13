import React from "react";
import Router from "./shared/Router";

const App = () => {
  return <Router />;
};

export default App;

// src/App.jsx

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { __getTodos } from "./redux/modules/todosSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   const a = useSelector((state) => state.todos.todos);
//   console.log(a);
//   // const { isLoading, error, todos } = useSelector((state) => state.todos);

//   useEffect(() => {
//     dispatch(__getTodos());
//   }, [dispatch]);

//   // if (isLoading) {
//   //   return <div>로딩 중....</div>;
//   // }

//   // if (error) {
//   //   return <div>{error.message}</div>;
//   // }

//   return (
//     <div>
//       1
//       {/* {todos.map((todo) => (
//         <div key={todo.id}>{todo.title}</div>
//       ))} */}
//     </div>
//   );
// };

// export default App;
