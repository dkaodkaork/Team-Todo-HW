import React from "react";
import { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import AddTodoForm from "../components/add/addTodo/AddTodoForm";
import AddModal from "../components/elements/AddModal";

const AddTodoPage = () => {
  const [modal, setModal] = useState({ clicked: false });

  const todoList = useSelector((state) => state.todo.todos);

  console.log(AddModal);
  console.log(todoList);

  const layoutStyle = {
    maxWidth: "1200px",
    minWidth: "900px",
    minHeight: "800px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  };
  return (
    <div style={{ ...layoutStyle }}>
      <div>
        <AddTodoForm modal={modal} />
      </div>
      {console.log(modal.clicked)}
      {modal.clicked ? <AddModal modal={modal} /> : null}
    </div>
  );
};

export default AddTodoPage;
