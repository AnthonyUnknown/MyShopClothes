import { ICloth } from "@/interfaces";
import classes from "./componentsStyles/cloth.module.css";

const Cloth: React.FC<ICloth> = ({ cloth }) => {
  return (
    <div className={classes.clothBlock}>
      <div className={classes.clothesPic} style={{ backgroundImage: `url(${cloth.pic})` }} />
      <div className={classes.clothesText}>
        <div className={classes.clothesDesc}>{cloth.title}</div>
        <div className={classes.clothesPrice}>{cloth.price}$</div>
      </div>
    </div>
  );
};

export default Cloth;
