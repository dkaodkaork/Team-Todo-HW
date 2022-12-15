import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import axios from "axios";
import Button from "../elements/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const navigate = useNavigate();
  const { paramsId } = useParams();
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);

  const fetchTodos = async () => {
    const { data } = await axios.get(
      `https://wild-insidious-parsnip.glitch.me/todos/${paramsId}`
    );
    setTodos(data);
  };
  // const dispatch = useDispatch();
  const onClickDelteButtonhandler = (todoId) => {
    // dispatch(contentAction.delete.Content(todoId));
    axios.delete(`https://wild-insidious-parsnip.glitch.me/todos/${todoId}`);
    setTodos([...todos, todos]);
  };

  //내용 벨류 가져오기
  const contentsData_redux = useSelector((state) => state.todo.todos);
  const [contentsData, setContentsData] = useState([]);

  const onChangeTextareaCommentHandler = (event, contents) => {
    const newArr = [...contentsData_redux];
    console.log(newArr);
    const index = newArr.findIndex((eli) => eli.id === todos.id);
    console.log(index);
    newArr[index].content = event.target.value;
    setContentsData(newArr);
  };
  console.log(contentsData);

  //해당 게시글 수정하기
  const onClickEditButtonHandler = (todosId) => {
    setEdit(!edit);
    // if (edit === true) {
    //   axios.patch(`https://wild-insidious-parsnip.glitch.me/todos/${todosId}`, {
    //     content: contentsData,
    //   });
    // }
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
        <div>
          <div className={classes.title}>{todos.title}</div>
          <div className={classes.content}>{todos.content}</div>
        </div>
        <div className={classes.maintitle}>
          <div className={classes.when}>
            <h4>
              {todos.createDate} ({todos.when})
            </h4>

            <div className={classes.btn}>
              <Button
                type="button"
                onClick={() => onClickDelteButtonhandler(todos.id)}
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
              name="content"
              type="text"
              // value={content.content}
              onChange={(event) => onChangeTextareaCommentHandler(event)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Todo;
