import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//style
import classes from "./Comments.module.css";
//components
import AddComments from "./AddComments";
import Card from "../../elements/Card";
import Button from "../../elements/Button";

const Comments = () => {
  const { parmsId } = useParams();

  //comments 데이터 추출
  const [commentsData, setCommentsData] = useState([]);
  //comments 데이터 중 해당 todo에 해당하는 comments만 추출
  const todo_comments = commentsData.filter(
    (comments) => comments.todoId === parmsId
  );
  console.log("todo_comments", todo_comments);

  //axios를 통해서 get 요청하는 함수 생성
  const fetchComments = async () => {
    const { data } = await axios.get(`http://localhost:3001/comments`);
    setCommentsData(data);
  };
  //fetchComments를 mount 됐을 때 실행하기 위해 useEffect 사용
  useEffect(() => {
    fetchComments();
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onClickDeleteButtonHandler = (commentId) => {
    console.log("삭제");
    console.log(commentId);
    // axios.delete(`http://localhost:3001/todos/${parmsId}/${commentId}`);
  };

  return (
    <div>
      <AddComments />
      {todo_comments.map((comment) => {
        console.log(comment);
        return (
          <Card className={classes.comment_wrap} key={comment.id}>
            <form className={classes.comment_box} onSubmit={onSubmitHandler}>
              <div className={classes.comment_header}>
                <label>
                  👤 {comment.username} 님의 코멘트
                  <span className={classes.date}>{comment.createDate}</span>
                </label>
                <div className={classes.btn}>
                  <Button>수정</Button>
                  <Button
                    onClick={() => onClickDeleteButtonHandler(comment.id)}
                  >
                    삭제
                  </Button>
                </div>
              </div>
              <textarea
                name="comment"
                type="text"
                value={comment.comment}
                className={classes.comment}
                disabled
              />
            </form>
          </Card>
        );
      })}
    </div>
  );
};

export default Comments;
