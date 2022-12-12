import classes from "./CardDetail.module.css";
import CustomButton from "../custombutton/CustomButton";

const CardDetail = ({ icon, title, onClick, onClick1 }) => {
  // const a = "detailbtn";
  // const b = "arrowbtn";
  const className = {
    detail: "detailbtn",
    arrow: "arrowbtn",
  };

  return (
    <div className={classes.detail}>
      <CustomButton
        className={className.detail}
        value="상세보기"
        onClick={onClick}
      />
      <h2>{title}</h2>
      <CustomButton
        className={className.arrow}
        value={icon}
        onClick={onClick1}
      />
    </div>
  );
};

export default CardDetail;
