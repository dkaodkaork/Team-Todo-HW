import React, { useState } from "react";
import uuid from "react-uuid";
//style
import classes from "./AddComments.module.css";
//components
import Button from "../../elements/Button";
import axios from "axios";
//custom-hooks
import useDate from "../../../hooks/useDate";

const AddComments = ({ todoData }) => {
  console.log("todoData :", todoData);
  //date custom-hook
  const date = useDate();
  //postComment state
  const [postComment, setPostComment] = useState({});

  //등록 버튼 클릭 시, 서버에 newComment POST
  const onSubmitHandlerComment = async (event) => {
    event.preventDefault();

    const newComment = {
      ...todoData,
      comments: [
        ...todoData.comments,
        {
          username: postComment.username,
          comment: postComment.comment,
          commentId: uuid(),
          createDate: date,
          editCheck: false,
        },
      ],
    };
    await axios.post("http://localhost:3001/todo", newComment);
    setPostComment(newComment);
  };
  console.log("postComment :", postComment);

  //input 값 가져오기
  const onChangeHandlerInput = (event) => {
    console.log(event.target.value);
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

// //등록 버튼 클릭 시, 서버에 newComment POST
// const onSubmitHandlerComment = async (event) => {
//   event.preventDefault();
//   const newComment = {
//     ...todoData,
//     comments: [
//       {
//         username: postComment.username,
//         comment: postComment.comment,
//         commentId: uuid(),
//         createDate: "2022-12-14",
//         editCheck: false,
//       },
//     ],
//   };
//   await axios.post(`http://localhost:3001/todo/${id}/comments`, newComment);
//   setPostComment(newComment);
// };
// console.log("postComment :", postComment);

//등록 버튼 클릭 시, 서버에 newComment POST
// const onSubmitHandlerComment = async (event) => {
//   event.preventDefault();

//   const newComment = {
//     username: postComment.username,
//     comment: postComment.comment,
//     commentId: uuid(),
//     createDate: "2022-12-14",
//     editCheck: false,
//   };
//   await axios.post("http://localhost:3001/todo", newComment);
//   setPostComment(newComment);
// };
// console.log("postComment :", postComment);
