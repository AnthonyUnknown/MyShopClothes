import { SyntheticEvent } from "react";
import classes from "./elementsStyles/inputAuth.module.css";

interface IInputAuth {
  value?: string;
  name?: string;
  type?: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  labelname: string;
  placeholder?: string;
}

const InputAuth: React.FC<IInputAuth> = (props) => {
  return (
    <div className={classes.inputAndLabel}>
      <div className={classes.label}>
        <label htmlFor={props.name}>{props.labelname}</label>
      </div>
      <div className={classes.input}>
        <input {...props} type={props.type} id={props.name} />
      </div>
    </div>
  );
};

export default InputAuth;
