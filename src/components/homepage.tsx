import { fetchClothesHomepage } from "@/api";
import Slider from "@/elements/slider";
import { IClothes } from "@/interfaces";
import { SyntheticEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Cloth from "./cloth";
import classes from "./componentsStyles/homepage.module.css";
import { ImSearch } from "react-icons/im";

const Homepage: React.FC = () => {
  const [clothes, setClothes] = useState<IClothes[]>([]);
  const [hiddenInput, setHiddenInput] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  function onChangeSearchValue(e: SyntheticEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function onHidden() {
    setHiddenInput(!hiddenInput);
  }

  async function fetchClothes() {
    try {
      let response = await fetchClothesHomepage();
      setClothes(response);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchClothes();
  }, []);

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
          <button className={classes.submitSearch} type="submit">
            <ImSearch />
          </button>
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
