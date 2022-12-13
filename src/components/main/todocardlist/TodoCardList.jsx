import Box from "../box/Box";
import CardDetail from "../carddetail/CardDetail";
import classes from "./TodoCardList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import { toggleStatusTodo } from "../../../redux/modules/todolist";
import { useEffect } from "react";
import { __getTodos } from "../../../redux/modules/todosSlice";

const TodoCardList = ({ progressName }) => {
  // console.log(progressName);
  const dispatch = useDispatch();

  // const todoList = useSelector((state) => state.todolist.todolist);
  const todoList = useSelector((state) => state.todos.todolist);

  console.log(todoList);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const data = todoList.filter((element) => element.progress === progressName);
  console.log(data);

  const navigate = useNavigate();
  const cardTitle = data.title;
  console.log(data);

  const arrowIcon = {
    done: <HiOutlineArrowCircleLeft size="45" color="white" />,
    plan: <HiOutlineArrowCircleRight size="45" color="white" />,
    working: <HiOutlineArrowCircleRight size="45" color="white" />,
  };

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  // const onToggleStatusTodo = (id) => {
  //   dispatch(toggleStatusTodo(id));
  // };

  return (
    <div className={classes.card}>
      <Box name={progressName} />
      {data.map((todo) => (
        <CardDetail
          title={todo.title}
          icon={arrowIcon[todo.progress]}
          onClick={() => onClickCard(todo.id)}
          // onClick1={() => onToggleStatusTodo(todo.id)}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoCardList;
