import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";

import { addTodo } from "../../../redux/modules/todo";
import classes from "./AddTodoForm.module.css";
import Button from "../../elements/Button";
import useDate from "../../../hooks/useDate";

const AddTodoForm = (props) => {
  console.log(props.modal.clicked);

  const [state, setState] = useState({ title: "", content: "" });
  const [when, setWhen] = useState({ checked: false, value: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = useDate();

  const titleInput = useRef();
  const radioInput1 = useRef();
  const radioInput2 = useRef();
  const radioInput3 = useRef();

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
      id: uuid(),
      title: state.title,
      content: state.content,
      progress: "plan",
      when: when.value,
      createDate: date,
    };
    if (state.title === "") {
      alert("제목을 입력해주세요");
    } else if (state.content === "") {
      alert("내용을 입력해주세요");
    } else if (when.value === "") {
      alert("언제할지 선택해주세요");
    }
    if (state.title && state.content !== "" && when.value !== "") {
      await axios
        .post(`${process.env.REACT_APP_DB_URL}/todos`, newTodo, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      dispatch(addTodo(newTodo));
      setState({ title: "", content: "" });
      setWhen({ checked: false, when: "" });
      radioInput1.current.checked = false;
      radioInput2.current.checked = false;
      radioInput3.current.checked = false;
      titleInput.current.focus();
      props.modal.clicked = true;
    }
  };
  return (
    <div>
      <div className={classes.addTodoContainer}>
        <Button
          className={classes.addTodoGobackbtn}
          onClick={() => navigate("/")}
        >
          이전으로
        </Button>
        <form className={classes.formContainer}>
          <div className={classes.inputTitleDiv}>
            <label style={{}} htmlFor="title">
              제목
            </label>
            <textarea
              maxLength={30}
              id="title"
              value={state.title}
              onChange={eventHander}
              ref={titleInput}
              className={classes.inputTitle}
              type="textArea"
              required
            />
          </div>
          <div className={classes.inputContentDiv}>
            <label style={{}} htmlFor="content">
              내용
            </label>
            <textarea
              maxLength={50}
              id="content"
              value={state.content}
              onChange={eventHander}
              className={classes.inputContent}
              required
            />
          </div>

          <div className={classes.inputWhenSelect}>
            <label className={classes.inputWhenMorning}>
              <input
                id="morning"
                type="radio"
                name="when"
                value="morning"
                onChange={whenStateChangeHandler}
                ref={radioInput1}
              />
              <span>오전 (AM)</span>
            </label>

            <label className={classes.inputWhenAfternoon}>
              <input
                id="afternoon"
                type="radio"
                name="when"
                value="afternoon"
                onChange={whenStateChangeHandler}
                ref={radioInput2}
              />
              <span> 오후 (PM)</span>
            </label>

            <label className={classes.inputWhenEvening}>
              <input
                id="evening"
                type="radio"
                name="when"
                value="evening"
                onChange={whenStateChangeHandler}
                ref={radioInput3}
              />
              <span>밤 (Night)</span>
            </label>
          </div>
        </form>
        <Button className={classes.addTodoBtn} onClick={addTodoHandler}>
          추가
        </Button>
      </div>
    </div>
  );
};

export default AddTodoForm;
