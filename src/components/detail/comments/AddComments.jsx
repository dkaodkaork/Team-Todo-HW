import React from "react";
//style
import classes from "./AddComments.module.css";
//components
import Button from "../../elements/Button";

const AddComments = () => {
  return (
    <div>
      <h3>Team's Todo Comments</h3>
      <hr />
      <form className={classes.addbox}>
        <div className={classes.input_box}>
          <div>
            <label htmlFor="title">작성자</label>
            <input id="title" name="title" type="text" />
          </div>
          <div>
            <label htmlFor="contents">코멘트</label>
            <textarea id="contents" name="contents" type="text" />
          </div>
        </div>
        <Button>등록</Button>
      </form>
    </div>
  );
};

export default AddComments;
