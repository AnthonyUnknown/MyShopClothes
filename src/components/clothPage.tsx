import { SET_CLOTHES } from "@/redux/reducers/clothesReducer";
import useTypedSelector from "@/redux/useTypedSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ClothPageParams from "./clothPageParams";

const ClothPage: React.FC = () => {
  const { id } = useParams();
  const newId = id?.slice(1);
  const dispatch = useDispatch();

  const clothes = useTypedSelector((stateClothes) =>
    stateClothes.cloth.clothes.filter((cloth) => String(cloth.id) === newId)
  );

  useEffect(() => {
    const localStorageClothes = localStorage.getItem("clothes");
    if (localStorageClothes) {
      const localStorageClothesParse = JSON.parse(localStorageClothes);
      dispatch({ type: SET_CLOTHES, payload: localStorageClothesParse });
    }
  }, []);

  return (
    <div>
      {clothes.map((cloth) => {
        return <ClothPageParams cloth={cloth} key={cloth.id} />;
      })}
    </div>
  );
};

export default ClothPage;
