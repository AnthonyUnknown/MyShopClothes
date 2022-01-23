import classes from "./componentsStyles/header.module.css";
import NavBar from "./navBar";

const Header: React.FC = () => (
  <div className={classes.headerWrapper}>
    <div className={classes.shopName}>ANTHONY UNKNOWN</div>
    <NavBar />
  </div>
);

export default Header;
