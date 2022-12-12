import React from "react";
import classes from "./Layout.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <span>TodoList</span>
    </div>
  );
};

// function Footer() {
//   return (
//     <div className={classes.footer}>
//       <span>copyright @항해99</span>
//     </div>
//   );
// }

function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
