import classes from "./CustomButton.module.css";

const CustomButton = ({ className, onClick, value }) => {
  // button의 이름과
  return (
    <button className={classes[className]} onClick={onClick}>
      {value}
    </button>
  );
};

export default CustomButton;
