import classes from "./CustomButton.module.css";

const CustomButton = ({ className, onClick, value }) => {
  return (
    <button className={classes[className]} onClick={onClick}>
      {value}
    </button>
  );
};

export default CustomButton;
