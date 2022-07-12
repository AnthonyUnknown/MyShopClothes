import { ICloth } from "@/interfaces";
import { NavLink } from "react-router-dom";
import classes from "./componentsStyles/cloth.module.css";

const Cloth: React.FC<ICloth> = ({ cloth }) => {
  return (
    <div className={classes.clothBlock}>
      <NavLink className={classes.clothBlock} to={`/clothes/:${cloth.id}`}>
        <div className={classes.clothesPic} style={{ backgroundImage: `url(${cloth.pic})` }} />
        <div className={classes.clothesText}>
          <div className={classes.clothesDesc}>{cloth.title}</div>
          <div className={classes.clothesPrice}>{cloth.price}$</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Cloth;
