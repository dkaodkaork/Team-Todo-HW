import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import axios from "axios";
import Button from "../elements/Button";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todo/id");
    setTodo(data);
  };

  const onClickDelteButtonhandler = (todoId) => {
    axios.delete(`http://localhost:3001/todo/${todoId}`);
    setTodo([...todo, todo]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todo);
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
          <div className={classes.title}>{}</div>
        </div>
        <div>
          내용
          <p className={classes.content}>{}</p>
        </div>
        오전/오후/저녁 {}
        <div className={classes.btn}>
          <Button
            type="button"
            onClick={() => onClickDelteButtonhandler(todo.id)}
            className={classes.btn2}
          >
            삭제
          </Button>
          <Button className={classes.btn3}>수정</Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
