import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import axios from "axios";
import Button from "../elements/Button";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const { paramsId } = useParams();
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get(`http://localhost:3001/todos/${paramsId}`);
    console.log(data);
    setTodos(data);
  };

  const onClickDelteButtonhandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
    setTodos([...todos, todos]);
  };

  // const onClickEditButtonHandler = (todosContent, edit) => {
  //   const newArr = [...todosData]
  //   const index = newArr.findIndex((el) => el.content === todosContent)
  //   newArr[index].edit = !edit
  //   setTodosData(newArr)
  //   if (newArr[index].edit === )
  //   axios.patch(`http://localhost:3001/todos/${todoContent}`, edit)
  // };

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
          <div className={classes.title}>{todos.title}</div>
        </div>
        <div>
          <p className={classes.content}>{todos.content}</p>
        </div>

        <div className={classes.when}>
          <h4>
            {todos.when} ({todos.createDate})
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
              // onClick={() => onClickEditButtonHandler()}
              className={classes.btn3}
            >
              수정
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
