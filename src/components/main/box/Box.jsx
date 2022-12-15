import classes from "./Box.module.css";

const Box = ({ name }) => {
  return (
    <div className={classes.state}>
      <span>{name}</span>
    </div>
  );
};

export default Box;
