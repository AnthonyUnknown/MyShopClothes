import { NavLink } from "react-router-dom";
import links from "@/links";
import classes from "./componentsStyles/navBar.module.css";
import { RiHome2Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { BiLogIn, BiLogOut, BiUser } from "react-icons/bi";
import useTypedSelector from "@/redux/useTypedSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOG_USER } from "@/redux/reducers/userLogReducer";
import { BsBasket } from "react-icons/bs";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();

  function onLogOut() {
    dispatch({ type: LOG_USER, payload: null });
    localStorage.removeItem("user");
  }

  let navMenu;

  useEffect(() => {
    let localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
      let userLog = JSON.parse(localStorageUser);
      console.log(userLog);
      dispatch({ type: LOG_USER, payload: userLog });
    }
  }, []);
  let user = useTypedSelector((state) => state.user.user);

  if (user) {
    navMenu = (
      <ul className={classes.navBar}>
        <li>
          <NavLink className={classes.navLink} to={links.homePage}>
            <RiHome2Line />
            <span className={classes.linkText}>Homepage</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to={links.userpage}>
            <BiUser />
            <span className={classes.linkText}>{user.name}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to={links.basket}>
            <BsBasket />
            <span className={classes.linkText}>Basket</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={onLogOut} className={classes.navLink} to={links.homePage}>
            <BiLogOut />
            <span className={classes.linkText}>LogOut</span>
          </NavLink>
        </li>
      </ul>
    );
  } else {
    navMenu = (
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
            <span className={classes.linkText}>Registration</span>
          </NavLink>
        </li>
      </ul>
    );
  }

  return <nav>{navMenu}</nav>;
};

export default NavBar;
