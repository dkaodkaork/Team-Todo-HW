import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.area_foot}>
      <small className={classes.info_copyright}>
        copyright @항해99 &nbsp;
        <a
          href="https://github.com/cchloe0927/Team-Todo"
          className={classes.gitlink}
        >
          git
        </a>
      </small>
    </div>
  );
};

export default Footer;
