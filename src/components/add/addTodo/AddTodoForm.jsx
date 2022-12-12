import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { addTodo } from "../../../redux/modules/todo";
import classes from "./AddTodoForm.module.css";
import Button from "../../elements/Button";
import useDate from "../../../hooks/useDate";

const AddTodo = () => {
  const [state, setState] = useState({ title: "", content: "" });
  const [when, setWhen] = useState({ checked: false, value: "" });
  const date = useDate();
  // const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const titleInput = useRef();
  const radioInput1 = useRef();
  const radioInput2 = useRef();
  const radioInput3 = useRef();

  const todoList = useSelector((state) => state.todo.todos);
  console.log(todoList);
  const eventHander = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setState({ ...state, [id]: value });
  };
  const whenStateChangeHandler = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setWhen({ ...when, checked: checked, value: value });
    console.log(when);
  };
  const addTodoHandler = async (event) => {
    event.preventDefault();

    const newTodo = {
      title: state.title,
      content: state.content,
      progress: "plan",
      when: when.value,
      date: date,
    };
    if (state.title && state.content !== "" && when !== "") {
      await axios.post("http://localhost:3001/posts", newTodo);
      dispatch(addTodo(newTodo));
      setState({ title: "", content: "" });
      setWhen({ checked: false, when: "" });
      radioInput1.current.checked = false;
      radioInput2.current.checked = false;
      radioInput3.current.checked = false;
      titleInput.current.focus();
    }
  };

  return (
    <div>
      <h3>Team's Todo Add Todo</h3>
      <hr />
      <div className={classes.formContainer}>
        <form className={classes.formContainer}>
          <label htmlFor="title">제목</label>
          {/* 제목입력 */}
          <input
            id="title"
            value={state.title}
            onChange={eventHander}
            ref={titleInput}
          />
          <label htmlFor="content">내용</label>
          {/* 내용입력 */}
          <input id="content" value={state.content} onChange={eventHander} />
          <div className={classes.whenSelect}>
            <label htmlFor="morning">오전</label>
            <input
              id="morning"
              type="radio"
              name="when"
              value="morning"
              onChange={whenStateChangeHandler}
              ref={radioInput1}
            />
            <label htmlFor="afternoon">오후</label>
            <input
              id="afternoon"
              type="radio"
              name="when"
              value="afternoon"
              onChange={whenStateChangeHandler}
              ref={radioInput2}
            />
            <label htmlFor="evening">밤</label>
            <input
              id="evening"
              type="radio"
              name="when"
              value="evening"
              onChange={whenStateChangeHandler}
              ref={radioInput3}
            />
          </div>
          <Button onClick={addTodoHandler}>추가</Button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
