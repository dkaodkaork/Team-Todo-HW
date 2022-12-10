import React from "react";
//style
import classes from "./Comments.module.css";
//components
import AddComments from "./AddComments";
import Card from "../../elements/Card";
import Button from "../../elements/Button";

const CommentsList = () => {
  return (
    <div>
      <AddComments />
      <Card className={classes.comment_wrap}>
        <form className={classes.comment_box}>
          <div className={classes.comment_header}>
            <label>👤 이현정 님의 코멘트</label>
            <div className={classes.btn}>
              <Button>수정하기</Button>
              <Button>삭제하기</Button>
            </div>
          </div>
          <textarea
            name="comment"
            type="text"
            className={classes.comment}
            disabled
          />
        </form>
      </Card>
    </div>
  );
};

export default CommentsList;
