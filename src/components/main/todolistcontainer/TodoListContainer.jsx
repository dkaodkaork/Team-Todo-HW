import classes from "./TodoListContainer.module.css";
import { useNavigate } from "react-router-dom";
import TodoCardList from "../todocardlist/TodoCardList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "../../../redux/modules/todosSlice";
import Button from "../../elements/Button";

const TodoListContainer = () => {
  const classname = "addbtn";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  const array = ["plan", "working", "done"];

  return (
    <div className={classes.layout}>
      <div className={classes.btnbox}>
        <Button className={classes.addbtn} onClick={() => navigate("/add")}>
          Todo 등록!
        </Button>
      </div>
      <div className={classes.box}>
        {array.map((progressName, i) => {
          return <TodoCardList progressName={progressName} key={i} />;
        })}
      </div>
    </div>
  );
};

export default TodoListContainer;
