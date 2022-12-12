import classes from "./Box.module.css";

const Box = ({ name }) => {
  // 재사용을 위한 박스
  return (
    <div className={classes.state}>
      <span>{name}</span>
    </div>
  );
};

export default Box;
