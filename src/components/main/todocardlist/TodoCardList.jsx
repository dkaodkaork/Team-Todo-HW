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
import { __getTodos, __patchTodos } from "../../../redux/modules/todosSlice";

const TodoCardList = ({ progressName }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  const data = todos.filter((element) => element.progress === progressName);

  const arrowIcon = {
    done: <HiOutlineArrowCircleLeft size="45" color="white" />,
    plan: <HiOutlineArrowCircleRight size="45" color="white" />,
    working: <HiOutlineArrowCircleRight size="45" color="white" />,
  };
  const cardColor = {
    plan: "planCard",
    working: "workingCard",
    done: "doneCard",
  };

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  const onToggleStatusTodo = (id) => {
    const todo = todos?.find((todo) => todo.id === id);
    const newTodo = { ...todo };

    if (newTodo.progress === "plan") {
      newTodo.progress = "working";
      axios
        .patch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
          progress: "working",
        })
        .then((response) => dispatch(__patchTodos(response)));
    } else if (newTodo.progress === "working") {
      newTodo.progress = "done";
      axios
        .patch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
          progress: "done",
        })
        .then((response) => dispatch(__patchTodos(response)));
    } else if (newTodo.progress === "done") {
      newTodo.progress = "working";
      axios
        .patch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
          progress: "working",
        })
        .then((response) => dispatch(__patchTodos(response)));
    } else return;
  };

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
          className={cardColor[todo.progress]}
        />
      ))}
    </div>
  );
};

export default TodoCardList;
