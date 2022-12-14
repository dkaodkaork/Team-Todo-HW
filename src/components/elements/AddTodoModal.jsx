import { useNavigate } from "react-router-dom";
import classes from "./AddTodoModal.module.css";
import Button from "./Button";

const AddTodoModal = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.todoModal}>
      <div className={classes.modalContent}>
        <div>추가되었습니다 !</div>
        <Button
          className="modalCheckBtn"
          onClick={() => {
            /* 커스텀이 사용되는 곳에 state를 선언해서 clicked 속성 불리언으로 사용 가능합니다. 
            스테이트 초기값 useState({clicked: false}) */
            props.modal.clicked = false;
            /* 제출 후 이전페이지로 경로 설정해주세요. */
            navigate("/");
          }}
        >
          확인
        </Button>
      </div>
    </div>
  );
};

export default AddTodoModal;
