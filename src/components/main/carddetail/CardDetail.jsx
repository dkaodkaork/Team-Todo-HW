import classes from "./CardDetail.module.css";
import CustomButton from "../custombutton/CustomButton";

const CardDetail = (props) => {
  const { icon, title, onClickDetail, onClickProgress, className } = props;

  const btnclassName = {
    detail: "detailbtn",
    arrow: "arrowbtn",
  };

  return (
    <div className={classes[className]}>
      <CustomButton
        className={btnclassName.detail}
        value="상세보기"
        onClick={onClickDetail}
      />
      <h2>{title}</h2>
      <CustomButton
        className={btnclassName.arrow}
        value={icon}
        onClick={onClickProgress}
      />
    </div>
  );
};

export default CardDetail;
