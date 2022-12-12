import classes from "./TodoListContainer.module.css";
import CustomButton from "../custombutton/CustomButton";
import { useNavigate } from "react-router-dom";
import TodoCardList from "../todocard/TodoCard";

const TodoListContainer = () => {
  const classname = "addbtn";
  const navigate = useNavigate();

  // 좀더 UI를 컴포넌트 별로 나누게  해보셈
  // 여기서 TodoList를 가져올 필요가 없을 것 같다
  // ex 버튼 상단부를 나누고, 나머지 본문부를 나눌거 같음
  //버ㅏ튼 상당부에서 버튼 onClick이런거 전 정의해줌
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
