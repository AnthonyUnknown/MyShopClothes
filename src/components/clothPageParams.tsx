import { ICloth } from "@/interfaces";
import links from "@/links";
import { useNavigate } from "react-router-dom";
import classes from "./componentsStyles/clothPageParams.module.css";

const ClothPageParams: React.FC<ICloth> = ({ cloth }) => {
  const navigate = useNavigate();

  function NavigateHome() {
    navigate(links.homePage);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.blockTop}>
        <div className={classes.pic} style={{ backgroundImage: `url(${cloth.pic})` }}></div>
        <div className={classes.firstBlockText}>
          <p>{cloth.title}</p>
          <p>Cost: {cloth.price}$</p>
          <p>{cloth.description}</p>
          <p>Availiable sized: {cloth.sizes.join(", ")}</p>
        </div>
      </div>
      <div className={classes.blockBottom}>
        <div className={classes.secondBlockText}>
          Select your size:
          <div>
            <button onClick={NavigateHome} className={classes.returnButton} type="button">
              Return to the homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothPageParams;
