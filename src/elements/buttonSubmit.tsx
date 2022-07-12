import classes from "./elementsStyles/buttonSubmit.module.css";

interface IButtonSubmit {
  onClick?: () => void;
  buttonname: string;
  disabled?: boolean;
}

const ButtonSubmit: React.FC<IButtonSubmit> = (props) => {
  return (
    <div className={classes.buttonBlock}>
      <button className={classes.buttonSubmit} {...props} type="submit">
        {props.buttonname}
      </button>
    </div>
  );
};

export default ButtonSubmit;
