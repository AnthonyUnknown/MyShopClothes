import { fetchClothesThree } from "@/api";
import { IClothes } from "@/interfaces";
import { useEffect, useState } from "react";
import classes from "./elementsStyles/slider.module.css";
/* eslint-disable jsx-a11y/label-has-associated-control */

const Slider = () => {
  const [clothes, setClothes] = useState<IClothes[]>([]);

  async function fetchClothes() {
    try {
      let response = await fetchClothesThree();
      setClothes(response);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <div className={classes.slider}>
      <div className={classes.slides}>
        <input className={classes.input1} type="radio" name="radio" id="radio1" />
        <input className={classes.input2} type="radio" name="radio" id="radio2" />
        <input className={classes.input3} type="radio" name="radio" id="radio3" />
        {clothes.map((cloth, i) => {
          return (
            <div key={cloth.id} className={i === 0 ? classes.slide1 : classes.slide}>
              <img className={classes.img} src={cloth.pic} alt="clothPic" />
            </div>
          );
        })}
      </div>
      <div className={classes.navigation}>
        <label htmlFor="radio1" className={classes.bar} />
        <label htmlFor="radio2" className={classes.bar} />
        <label htmlFor="radio3" className={classes.bar} />
      </div>
    </div>
  );
};

export default Slider;
