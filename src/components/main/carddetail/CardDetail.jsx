import classes from "./CardDetail.module.css";
import CustomButton from "../custombutton/CustomButton";
import Button from "../../elements/Button";

const CardDetail = (props) => {
  const { icon, title, onClickDetail, onClickProgress, className } = props;

  const btnclassName = {
    arrow: "arrowbtn",
  };

  return (
    <div className={classes[className]}>
      <Button className={classes.detailbtn} onClick={onClickDetail}>
        상세보기
      </Button>
      <h2>{title}</h2>
      <Button className={classes.arrowbtn} onClick={onClickProgress}>
        {icon}
      </Button>
    </div>
  );
};

export default CardDetail;
