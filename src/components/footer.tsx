import classes from "./componentsStyles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <div>
      <hr />
      <div className={classes.footer}>
        <div className={classes.privacy}>Privacy policy</div>
        <div>Made by Anthony Unknown, 2022 ©</div>
      </div>
    </div>
  );
};

export default Footer;
