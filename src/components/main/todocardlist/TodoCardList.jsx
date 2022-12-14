import classes from "./TodoCardList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleStatusTodo } from "../../../redux/modules/todosSlice";
import CardDetail from "../carddetail/CardDetail";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import Box from "../box/Box";

const TodoCardList = ({ progressName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { todos } = useSelector((state) => state.todos);

  const data = todos.filter((element) => element.progress === progressName);

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
    dispatch(toggleStatusTodo(id));
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
          className={
            todo.when === "morning"
              ? cardColor.morning
              : todo.when === "afternoon"
              ? cardColor.afternoon
              : cardColor.evening
          }
        />
      ))}
    </div>
  );
};

export default TodoCardList;
