import { useNavigate } from "react-router-dom";
import classes from "./AddModal.module.css";
import Button from "./Button";

const AddTodoModal = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.todoModal}>
      <div className={classes.modalContent}>
        <div>추가되었습니다 !</div>
        <Button
          className="modalCheckBtn"
          onClick={() => {
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
