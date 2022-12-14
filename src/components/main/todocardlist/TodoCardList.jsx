import classes from "./TodoCardList.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardDetail from "../carddetail/CardDetail";
import { useDispatch } from "react-redux";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import Box from "../../elements/box/Box";
import React, { useState } from "react";
import { __getTodos, __patchTodos } from "../../../redux/modules/todosSlice";

const TodoCardList = ({ progressName }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);
  // console.log(todos);

  const [newTodos, setnewTodos] = useState([]);

  const data = todos.filter((element) => element.progress === progressName);
  console.log(data);

  const arrowIcon = {
    done: <HiOutlineArrowCircleLeft size="45" color="white" />,
    plan: <HiOutlineArrowCircleRight size="45" color="white" />,
    working: <HiOutlineArrowCircleRight size="45" color="white" />,
  };
  const cardColor = {
    morning: "morningCard",
    afternoon: "afternoonCard",
    evening: "eveningCard",
  };

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  const onToggleStatusTodo = (id) => {
    // console.log("id:", id, "progress:", progress);
    // const newTodo = [...todos];
    // console.log(id);
    const todo = todos?.find((todo) => todo.id === id);
    console.log(todo);
    const newTodo = { ...todo };
    console.log(newTodo);
    // console.log("index:", index);
    // console.log(todos[index].id);
    // console.log(newTodo[index].progress);
    if (newTodo.progress === "plan") {
      newTodo.progress = "working";
      // setnewTodos(newTodo);
      // console.log(newTodo.progress);
      axios
        .patch(`https://wild-insidious-parsnip.glitch.me/todos/${id}`, {
          progress: "working",
        })
        .then((response) => dispatch(__patchTodos(response)));
      // console.log(response);
    } else if (newTodo.progress === "working") {
      newTodo.progress = "done";
      // setnewTodos(newTodo);
      axios
        .patch(`https://wild-insidious-parsnip.glitch.me/todos/${id}`, {
          progress: "done",
        })
        .then((response) => dispatch(__patchTodos(response)));
    } else if (newTodo.progress === "done") {
      newTodo.progress = "working";
      // setnewTodos(newTodo);
      axios
        .patch(`https://wild-insidious-parsnip.glitch.me/todos/${id}`, {
          progress: "working",
        })
        .then((response) => dispatch(__patchTodos(response)));
    } else return;
  };

  // 수정이 성공했을때 get요청 다시 then, catch .
  //

  return (
    <div className={classes.card}>
      <Box name={progressName} />
      {data.map((todo) => (
        <CardDetail
          title={todo.title}
          icon={arrowIcon[todo.progress]}
          onClickDetail={() => onClickCard(todo.id)}
          onClickProgress={() => onToggleStatusTodo(todo.id)}
          key={todo.id}
          className={cardColor[todo.when]}
        />
      ))}
    </div>
  );
};

export default TodoCardList;
