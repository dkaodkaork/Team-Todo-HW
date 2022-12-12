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

  //전체 comments 데이터 추출
  const [commentsData, setCommentsData] = useState([]);
  //console.log(commentsData);

  //textarea value state
  const onChangeTextareaCommentHandler = (event, commentId) => {
    //textarea value 가져오기 event.target.value
    const newArr = [...commentsData];
    const index = newArr.findIndex((el) => el.id === commentId);
    newArr[index].comment = event.target.value;
    setCommentsData(newArr);
  };

  //해당 댓글 수정하기
  const onClickEditButtonHandler = (commentId, editCheck) => {
    //console.log("commentId :", commentId, "editCheck :", editCheck);
    const newArr = [...commentsData];
    const index = newArr.findIndex((el) => el.id === commentId);
    newArr[index].editCheck = !editCheck;
    setCommentsData(newArr);
    if (newArr[index].editCheck === false) {
      axios.patch(`http://localhost:3001/comments/${commentId}`, {
        comment: newArr[index].comment,
      });
    }
  };

  //해당 댓글 삭제하기
  const onClickDeleteButtonHandler = (commentId) => {
    //console.log(commentId);
    axios.delete(`http://localhost:3001/comments/${commentId}`);
  };

  //axios를 통해서 get 요청하는 함수 생성
  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comments?todoId=${parmsId}`
    );
    setCommentsData(data);
  };
  //fetchComments를 mount 됐을 때 실행하기 위해 useEffect 사용
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <AddComments />
      {commentsData.map((comment) => {
        return (
          <Card className={classes.comment_wrap} key={comment.id}>
            <form
              className={classes.comment_box}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={classes.comment_header}>
                <label>
                  👤 {comment.username} 님의 코멘트
                  <span className={classes.date}>{comment.createDate}</span>
                </label>
                <div className={classes.btn}>
                  <Button
                    onClick={() =>
                      onClickEditButtonHandler(comment.id, comment.editCheck)
                    }
                  >
                    {comment.editCheck ? "완료" : "수정"}
                  </Button>
                  <Button
                    onClick={() => onClickDeleteButtonHandler(comment.id)}
                  >
                    삭제
                  </Button>
                </div>
              </div>
              <textarea
                className={classes.comment}
                name="comment"
                type="text"
                value={comment.comment}
                disabled={!comment.editCheck}
                onChange={(event) =>
                  onChangeTextareaCommentHandler(event, comment.id)
                }
              />
            </form>
          </Card>
        );
      })}
    </div>
  );
};

export default Comments;
