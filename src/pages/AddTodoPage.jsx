import React from "react";
import { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import AddTodoForm from "../components/add/addTodo/AddTodoForm";
import AddTodoModal from "../components/elements/AddTodoModal";
// import AddModal from "../hooks/AddModal";
// import Button from "../components/elements/Button";

const AddTodoPage = () => {
  const [modal, setModal] = useState({ clicked: false });

  const todoList = useSelector((state) => state.todo.todos);

  // const AddTodoModal = AddModal(modal);
  console.log(AddTodoModal);
  console.log(todoList);

  return (
    <div>
      <h3>Team's Todo Add Todo</h3>
      <hr />
      <div>
        <AddTodoForm modal={modal} />
      </div>
      {console.log(modal.clicked)}
      {modal.clicked ? <AddTodoModal modal={modal} /> : null}
    </div>
  );
};

export default AddTodoPage;
