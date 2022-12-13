import Box from "../box/Box";
import CardDetail from "../carddetail/CardDetail";
import classes from "./TodoCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toggleStatusTodo } from "../../../redux/modules/todolist";

const TodoCardList = ({ progressName }) => {
  // console.log(progressName);
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todolist.todolist);

  const data = todoList.filter((element) => element.progress === progressName);

  const navigate = useNavigate();
  // const cardTitle = data.title;
  // console.log(data);

  const arrowIcon = {
    done: <HiOutlineArrowCircleLeft size="45" color="white" />,
    plan: <HiOutlineArrowCircleRight size="45" color="white" />,
    working: <HiOutlineArrowCircleRight size="45" color="white" />,
  };

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <div className={classes.card}>
      <Box name={progressName} />
      {data.map((todo) => (
        <CardDetail
          title={todo.title}
          icon={arrowIcon[todo.progress]}
          onClick={() => onClickCard(todo.id)}
          onClick1={() => onToggleStatusTodo(todo.id)}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoCardList;
