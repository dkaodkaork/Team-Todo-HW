import { useNavigate } from "react-router-dom";
import classes from "./AddTodoModal.module.css";
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
            /* 
            1. 커스텀이 사용되는 곳(모달 적용되는 부모 컴포넌트)에 state를 선언해서 clicked 속성 불리언으로 사용 가능합니다. 
            2. 스테이트 초기값 useState({clicked: false})
            3. AddHandler로 제출할 때 modal 상태 값을 true 바꾸면 modal 실행
            4. Add 페이지에 진입할 때 useEffect로 모달값 false로 초기화 진행
                useEffect(() => {
                  setModal({ ...modal, clicked: false });
                }, []);
            */
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
