import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import axios from "axios";
import Button from "../elements/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Todo = () => {
  const navigate = useNavigate();
  const { paramsId } = useParams();
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
 
 const fetchTodos = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DB_URL}/todos/${paramsId}`
    );
    setTodos(data);
  };

  const onClickDelteButtonhandler = (todoId) => {
    axios.delete(`${process.env.REACT_APP_DB_URL}/todos/${todoId}`);
    setTodos([...todos, todos]);
  };

 // const contentsDataRedux = useSelector((state) => state.contents.contents);

  // const onChangeTextareaCommentHandler = (event, contentIndex) => {
  //   const newArr = [...contentsDataRedux];
  //   newArr[contentIndex].content = event.target.value;
  //   const newArrContent = newArr[contentIndex].content;
  //   setContentsValue(newArrContent);
  // };

  const onClickEditButtonHandler = (todosId) => {
    setEdit(!edit);
    if (edit === true) {
      axios.patch(`${process.env.REACT_APP_DB_URL}/todos/${todoId}`, {
        content: todosId,
      });
      // } else {
      //   null;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={classes.card}>
      <div className={classes.wrap}>
        <div className={classes.h1}>
          <h1>상세보기</h1>
          <Button
            onClick={() => {
              navigate("/");
            }}
            className={classes.btn1}
          >
            이전으로
          </Button>
        </div>
        <div className={classes.maintitle}>
          <div className={classes.title}>
            제목 <p /> {todos.title}
          </div>
        </div>
        <div className={classes.content}>
          내용 <br />
          {todos.content}
        </div>
        <div className={classes.when}>
          {todos.when}
          <div className={classes.btn}>
            <Button
              type="button"
              onClick={() => onClickDelteButtonhandler(todos.id, navigate("/"))}
              className={classes.btn2}
            >
              삭제
            </Button>

            <Button
              onClick={() => onClickEditButtonHandler(todos.id)}
              className={classes.btn3}
            >
              수정
            </Button>
          </div>
        </div>
        {edit ? (
          <textarea
            className={classes.remove}
            type="text"
            // value={content.content}
            // onChange={(event) => onChangeTextareaCommentHandler(event)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Todo;
