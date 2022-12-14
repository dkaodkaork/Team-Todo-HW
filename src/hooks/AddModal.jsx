import { useNavigate } from "react-router-dom";
// import classes from "./AddTodoModal.module.css";
import Button from "../components/elements/Button";

const AddModal = (props) => {
  const navigate = useNavigate();

  const todoModalStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };
  const modalContentStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #fff",
    borderRadius: "12px",
    padding: "15px 90px 20px 90px",
    width: "15%",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };
  const modalCheckBtnStyles = {
    margin: "0 auto",
    width: "100px !important",
    height: "20px !important",
    padding: "20px !important",
  };
  return (
    <div style={{ ...todoModalStyles }}>
      <div style={{ ...modalContentStyles }}>
        <div>추가되었습니다 !</div>
        <Button
          style={{ ...modalCheckBtnStyles }}
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

export default AddModal;
