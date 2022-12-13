import classes from "./CardDetail.module.css";
import CustomButton from "../custombutton/CustomButton";

const CardDetail = ({ icon, title, onClickDetail, onClickProgress }) => {
  const className = {
    detail: "detailbtn",
    arrow: "arrowbtn",
  };

  return (
    <div className={classes.detail}>
      <CustomButton
        className={className.detail}
        value="상세보기"
        onClick={onClickDetail}
      />
      <h2>{title}</h2>
      <CustomButton
        className={className.arrow}
        value={icon}
        onClick={onClickProgress}
      />
    </div>
  );
};

export default CardDetail;
