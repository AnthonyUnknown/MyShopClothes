import { fetchClothesHomepage } from "@/api";
import Slider from "@/elements/slider";
import { IClothes } from "@/interfaces";
import { fetchClothesHome } from "@/redux/actionFunctions";
import useTypedSelector from "@/redux/useTypedSelector";
import { SyntheticEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Cloth from "./cloth";
import classes from "./componentsStyles/homepage.module.css";

const Homepage: React.FC = () => {
  const [hiddenInput, setHiddenInput] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  function onChangeSearchValue(e: SyntheticEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function onHidden() {
    setHiddenInput(!hiddenInput);
  }

  function fetchClothes() {
    dispatch(fetchClothesHome(searchValue));
  }

  const clothes = useTypedSelector((stateClothes) => stateClothes.cloth.clothes);

  useEffect(() => {
    fetchClothes();
  }, [searchValue]);

  return (
    <div className={classes.homepage}>
      <div className={classes.wrapperHP}>
        <hr />
        <div className={classes.accessories}>
          <p>Look at our new collection</p>
        </div>
        <hr />
        <Slider />
        <hr />
        <div className={classes.accessories}>
          <p>Accessories</p>
        </div>
        <hr />
        <div className={classes.search}>
          <button onClick={onHidden} className={classes.searchButton} type="button">
            Find the clothes you need
            <BiSearch />
          </button>
        </div>
        <div style={hiddenInput ? { visibility: "hidden" } : { visibility: "visible" }} className={classes.inputSearch}>
          <input type="text" placeholder="Find your clothes!" value={searchValue} onChange={onChangeSearchValue} />
        </div>
        <div className={classes.clothes}>
          {clothes.map((cloth) => {
            return <Cloth cloth={cloth} key={cloth.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
