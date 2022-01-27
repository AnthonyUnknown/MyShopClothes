import { apiReg } from "@/api";
import ButtonSubmit from "@/elements/buttonSubmit";
import InputAuth from "@/elements/inputAuth";
import links from "@/links";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./componentsStyles/registration.module.css";

const Registration: React.FC = () => {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [repPasswordReg, setRepPasswordReg] = useState("");

  const history = useNavigate();

  function onEmailReg(e: SyntheticEvent<HTMLInputElement>) {
    setEmailReg(e.currentTarget.value);
  }

  function onPasswordReg(e: SyntheticEvent<HTMLInputElement>) {
    setPasswordReg(e.currentTarget.value);
  }

  function onRepPasswordReg(e: SyntheticEvent<HTMLInputElement>) {
    setRepPasswordReg(e.currentTarget.value);
  }

  async function onReg(e: SyntheticEvent) {
    e.preventDefault();
    try {
      await apiReg(emailReg, passwordReg);
      history(`/${links.login}`);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <form onSubmit={onReg}>
      <div className={classes.regWrapper}>
        <div>First time with us?</div>
        <div className={classes.regForm}>
          <div className={classes.formBlock}>
            <InputAuth
              labelname="Login"
              type="email"
              name="emailReg"
              placeholder="Email adress"
              value={emailReg}
              onChange={onEmailReg}
            />
          </div>
          <div className={classes.formBlock}>
            <InputAuth
              labelname="Password"
              type="password"
              name="passwordReg"
              placeholder="Password"
              value={passwordReg}
              onChange={onPasswordReg}
            />
          </div>
          <div className={classes.formBlock}>
            <InputAuth
              labelname="Repeat password"
              type="password"
              name="repPasswordReg"
              placeholder="Password"
              value={repPasswordReg}
              onChange={onRepPasswordReg}
            />
          </div>
        </div>
        <div>
          <ButtonSubmit buttonname="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Registration;
