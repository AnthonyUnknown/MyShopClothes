import ButtonSubmit from "@/elements/buttonSubmit";
import InputAuth from "@/elements/inputAuth";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./componentsStyles/login.module.css";
import links from "@/links";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "@/redux/actionFunctions";

interface stateType {
  from: string;
}

const Login: React.FC = () => {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const history = useNavigate();
  const dispatch = useDispatch();

  function onRegLocate() {
    history(`/${links.register}`);
  }

  function onChangeEmail(e: SyntheticEvent<HTMLInputElement>) {
    setEmailLog(e.currentTarget.value);
  }

  function onChangePassword(e: SyntheticEvent<HTMLInputElement>) {
    setPasswordLog(e.currentTarget.value);
  }

  const location = useLocation();
  const state = location.state as stateType;

  function onLog(e: SyntheticEvent) {
    let pathLog = "/";
    e.preventDefault();
    dispatch(fetchUser(emailLog, passwordLog));
    if (state && state.from) {
      pathLog = state.from;
    }
    setEmailLog("");
    setPasswordLog("");
    history(pathLog);
  }

  return (
    <form onSubmit={onLog}>
      <div className={classes.loginWrapper}>
        <div>Hello! Please sign in!</div>
        <div className={classes.signInForm}>
          <div className={classes.formBlock}>
            <InputAuth
              onChange={onChangeEmail}
              value={emailLog}
              labelname="Login"
              type="email"
              name="emailLogin"
              placeholder="Email adress"
            />
          </div>
          <div className={classes.formBlock}>
            <InputAuth
              onChange={onChangePassword}
              value={passwordLog}
              labelname="Password"
              type="password"
              name="passwordLogin"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <ButtonSubmit buttonname="Submit" />
        </div>
        <div className={classes.reg} onClick={onRegLocate}>
          Registration
        </div>
      </div>
    </form>
  );
};

export default Login;
