import React from "react";
import { useState } from "react";

import AddTodoForm from "../components/add/addTodo/AddTodoForm";
import AddModal from "../components/elements/AddModal";

const AddTodoPage = () => {
  const [modal, setModal] = useState({ clicked: false });

  return (
    <div>
      <h3>Team's Todo Add Todo</h3>
      <hr />
      <div>
        <AddTodoForm modal={modal} setModal={setModal} />
      </div>
      {modal.clicked ? <AddModal modal={modal} /> : null}
    </div>
  );
};

export default AddTodoPage;
