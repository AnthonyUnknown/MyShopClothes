import { useNavigate } from "react-router-dom";
import classes from "./componentsStyles/header.module.css";
import NavBar from "./navBar";
import links from "@/links";

const Header: React.FC = () => {
  let history = useNavigate();

  function onNavigate() {
    history(`${links.homePage}`);
  }

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.shopName} onClick={onNavigate}>
        ANTHONY UNKNOWN
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
