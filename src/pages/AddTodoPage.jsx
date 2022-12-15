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

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "40px",
    fontWeight: "bold",
    paddingLeft: "20px",
    marginTop: "30px",
    height: "70px",
    borderRadius: "10px",
    backgroundColor: "#949799",
    color: "black",
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    backgroundColor: "#949799",
    color: "black",
    margin: "30px 0px 30px 0px",
    height: "70px",
    borderRadius: "10px",
  };

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
      <div style={{ ...headerStyle }}>Team's Todo Add Todo</div>
      <hr />
      <div>
        <AddTodoForm modal={modal} />
      </div>
      {console.log(modal.clicked)}
      {modal.clicked ? <AddModal modal={modal} /> : null}
      <div style={{ ...footerStyle }}></div>
    </div>
  );
};

export default AddTodoPage;
