import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import axios from "axios";

const Todo = () => {
  //   const [todos, setTodos] = useState(null);
  //   const fetchTodos = async () => {
  //     const { data } = await axios.get("http://localhost:3001/todo");
  //     setTodos(data);
  //   };
  //   useEffect(() => {
  //     fetchTodos();
  //   }, []);

  // console.log(todos);
  return (
    <div className={classes.card}>
      <div className={classes.wrap}>
        <div className={classes.h1}>
          <h1>상세보기</h1>
          <button className={classes.btn1}>이전으로</button>
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
          <button className={classes.btn2}>삭제</button>
          <button className={classes.btn3}>수정</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
