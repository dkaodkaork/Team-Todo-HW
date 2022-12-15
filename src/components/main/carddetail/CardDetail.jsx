import classes from "./CardDetail.module.css";
import Button from "../../elements/Button";

const CardDetail = (props) => {
  const { icon, title, onClickDetail, onClickProgress, className } = props;

  return (
    <div className={classes[className]}>
      <Button className={classes.detailbtn} onClick={onClickDetail}>
        상세보기
      </Button>
      <div className={classes.titlestyle}>
        <p className={classes.auto}>{title}</p>
      </div>
      <Button className={classes.arrowbtn} onClick={onClickProgress}>
        {icon}
      </Button>
    </div>
  );
};

export default CardDetail;
