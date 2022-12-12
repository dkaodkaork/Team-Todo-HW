import classes from "./TodoListContainer.module.css";
import CustomButton from "../custombutton/CustomButton";
import { useNavigate } from "react-router-dom";
import TodoCardList from "../todocard/TodoCard";

const TodoListContainer = () => {
  const classname = "addbtn";
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.btnbox}>
        <CustomButton
          className={classname}
          value=" Todo 등록!"
          onClick={() => navigate("/add")}
        />
        <div></div>
      </div>
      <div className={classes.box}>
        <TodoCardList progressName="plan" />
        <TodoCardList progressName="working" />
        <TodoCardList progressName="done" />
      </div>
    </>
  );
};

export default TodoListContainer;
