import React, { useEffect, useState, useRef } from "react";
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
  const [postComment, setPostComment] = useState({});

  //등록 버튼 클릭 시, 서버에 newComment POST
  const onSubmitHandlerComment = async (event) => {
    event.preventDefault();
    const newComment = {
      username: postComment.username,
      comment: postComment.comment,
      createDate: date,
      editCheck: false,
      id: uuid(),
      //고유 id는 json에서 자동 생성해주기 때문에 따로 데이터를 넘길 필요 없음! -> 넘겨줘야함 State로 관리할 때 id 값이 없음
      //todoId: 해당todoid   -->  todoId는 이미 API URL에서 받아오고 있음 -> json-server가 해당 todo의 id를 읽어오는 방식으로 키값을 todo안에 id를 읽어오겠다할 때 todoId 이렇게 써야함!
    };

    dispatch(commentsAction.postComment(paramsId, newComment));

    //저장 후 input 내용 빈 값 처리
    setPostComment({
      username: "",
      comment: "",
    });
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
            />
          </div>
          <div>
            <label htmlFor="comment">코멘트</label>
            <textarea
              id="comment"
              name="comment"
              type="text"
              onChange={onChangeHandlerInput}
            />
          </div>
        </div>
        <Button>등록</Button>
      </form>
    </div>
  );
};

export default AddComments;
