import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
//components
import Card from "../../elements/Card";
import Button from "../../elements/Button";
import AddComments from "./AddComments";
//redux
import { commentsAction } from "../../../redux/actions/commentsAction";
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  //전체 comments 데이터 추출
  const commentsDataRedux = useSelector((state) => state.comments.comments);
  console.log(commentsDataRedux, "commentsDataRedux");
  const [commentsData, setCommentsData] = useState([]);
  //console.log(commentsData, "commentsData");

  //해당 댓글 등록하기 -> get 요청하는 함수 생성
  const GetComments = () => {
    dispatch(commentsAction.getComments(paramsId));
  };
  //fetchComments를 mount됐을 때 실행하기 위해
  useEffect(() => {
    GetComments();
  }, []);

  //해당 댓글 삭제하기
  const onClickDeleteButtonHandler = (commentId) => {
    //console.log(commentId);
    dispatch(commentsAction.deleteComment(commentId));
  };

  //해당 댓글 수정하기
  //textarea value state
  const onChangeTextareaCommentHandler = (event, commentId) => {
    //textarea value 가져오기 event.target.value
    const newArr = [...commentsDataRedux];
    const index = newArr.findIndex((el) => el.id === commentId);
    newArr[index].comment = event.target.value;
    setCommentsData(newArr);
  };

  const onClickEditButtonHandler = (commentId, editCheck) => {
    //console.log("commentId :", commentId, "editCheck :", editCheck);
    const newArr = [...commentsDataRedux];
    const index = newArr.findIndex((el) => el.id === commentId);
    newArr[index].editCheck = !editCheck;
    setCommentsData(newArr);
    //console.log(commentsData);
    if (newArr[index].editCheck === false) {
      axios.patch(
        `https://wild-insidious-parsnip.glitch.me/comments/${commentId}`,
        {
          comment: newArr[index].comment,
        }
      );
    }
  };

  return (
    <div>
      <AddComments />
      {commentsDataRedux.map((comment) => {
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
