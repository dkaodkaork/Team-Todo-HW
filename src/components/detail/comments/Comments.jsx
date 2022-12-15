import React, { useEffect, useState } from "react";
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
  //console.log("commentsDataRedux :", commentsDataRedux);
  //commnet State
  const [commentValue, setCommentValue] = useState("");
  //editCheck State
  const [editCheckBoolean, setEditCheckBoolean] = useState(false);

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
    dispatch(commentsAction.deleteComment(commentId));
  };

  //해당 댓글 수정하기
  //textarea value state
  const onChangeTextareaCommentHandler = (event, commentIndex) => {
    //textarea value 가져오기 event.target.value
    const newArr = [...commentsDataRedux];
    newArr[commentIndex].comment = event.target.value;
    const newArrComment = newArr[commentIndex].comment;
    setCommentValue(newArrComment);
  };

  const onClickEditButtonHandler = (commentId, commentIndex) => {
    /** 순서 중요!
     * 버튼 클릭 시, 조건문에 불합 -> editCheckBoolean State true로 변경!
     * true인 경우 textarea태그 활성화되서 값 변경 가능
     * event.target.value로 변경 값 읽어와서
     * 다시 버튼 클릭하면 editCheck이 false가 되면서 조건 충족하여 patch함!
     */
    const newArr = [...commentsDataRedux];
    if (newArr[commentIndex].editCheck) {
      dispatch(commentsAction.patchComment(commentId, commentValue));
    }
    newArr[commentIndex].editCheck = !editCheckBoolean;
    setEditCheckBoolean(!editCheckBoolean);
  };

  return (
    <div>
      <AddComments />
      {commentsDataRedux.map((comment, index) => {
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
                    onClick={() => onClickEditButtonHandler(comment.id, index)}
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
                  onChangeTextareaCommentHandler(event, index)
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
