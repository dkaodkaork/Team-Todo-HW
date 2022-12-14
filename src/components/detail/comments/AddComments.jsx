import React, { useState } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
//style
import classes from "./AddComments.module.css";
//components
import Button from "../../elements/Button";
//custom-hooks
import useDate from "../../../hooks/useDate";
//redux
import { useDispatch } from "react-redux";
import { commentsAction } from "../../../redux/actions/commentsAction";

const AddComments = () => {
  const { paramsId } = useParams();
  const date = useDate();
  const dispatch = useDispatch();

  //Input[username, comment] state
  const [postComment, setPostComment] = useState({
    username: "",
    comment: "",
  });

  //등록 버튼 클릭 시, 서버에 newComment POST
  const onSubmitHandlerComment = async (event) => {
    event.preventDefault();
    const newComment = {
      username: postComment.username,
      comment: postComment.comment,
      createDate: date,
      editCheck: false,
      id: uuid(),
      /**고유 id는 json에서 자동 생성(키값은 무조건 id여야함! 새로고침 없이 State를 변경하면 id가 없기 떄문에 map을 돌릴 수 없음
       *따라서 id은 넣어줘야 하고 넣게 되면 json에서 내가 넣은 데이터로 id를 넣음
       *todoId("todo"의 id)인 경우에서 json에서 자동 생성하는데 https:localhost:3000/todos/${paramsId}/comments 이 형태로 해당 URL에 todoId값을 읽어와서 넣어줌
       */
    };

    if (postComment.username === "" || postComment.comment === "") {
      alert("모든 내용을 입력해 주세요!");
    } else {
      //미들웨어로 함수를 호출함
      dispatch(commentsAction.postComment(paramsId, newComment));

      //저장 후 input 내용 빈 값 처리
      setPostComment({
        username: "",
        comment: "",
      });
    }
  };

  //input 값 가져오기
  const onChangeHandlerInput = (event) => {
    const { name, value } = event.target;

    setPostComment({ ...postComment, [name]: value });
  };

  return (
    <div>
      <h3>Team's Todo Comments</h3>
      <hr />
      <form className={classes.addbox} onSubmit={onSubmitHandlerComment}>
        <div className={classes.input_box}>
          <div>
            <label htmlFor="username">작성자</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={onChangeHandlerInput}
              value={postComment.username}
            />
          </div>
          <div>
            <label htmlFor="comment">코멘트</label>
            <textarea
              id="comment"
              name="comment"
              type="text"
              onChange={onChangeHandlerInput}
              value={postComment.comment}
            />
          </div>
        </div>
        <Button>등록</Button>
      </form>
    </div>
  );
};

export default AddComments;
