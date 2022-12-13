import { useNavigate } from "react-router-dom";
import classes from "./AddTodoModal.module.css";
import Button from "../../elements/Button";

const AddTodoModal = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.todoModal}>
      <div className={classes.modalContent}>
        <div>추가되었습니다 !</div>
        <Button
          className="modalCheckBtn"
          onClick={() => {
            props.modal.clicked = false;
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
