import { NavLink } from "react-router-dom";
import links from "@/links";
import classes from "./componentsStyles/navBar.module.css";
import { RiHome2Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={classes.navBar}>
        <li>
          <NavLink className={classes.navLink} to={links.homePage}>
            <RiHome2Line />
            <span className={classes.linkText}>Homepage</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to={links.login}>
            <BiLogIn />
            <span className={classes.linkText}>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to={links.register}>
            <MdAppRegistration />
            <span className={classes.linkText}>Register</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
