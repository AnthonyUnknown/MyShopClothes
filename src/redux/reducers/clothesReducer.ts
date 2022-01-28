import { IClothes } from "@/interfaces";

export const SET_CLOTHES = "SET_CLOTHES";

interface IClothesRed {
  clothes: IClothes[];
}

interface IActionSetClothes {
  type: typeof SET_CLOTHES;
  payload: IClothes[];
}

const defaultState: IClothesRed = {
  clothes: [],
};

export type IActionClothes = IActionSetClothes;

export const clothesReducer = (stateClothes = defaultState, action: IActionClothes): IClothesRed => {
  switch (action.type) {
    case SET_CLOTHES:
      return { ...stateClothes, clothes: action.payload };
    default:
      return stateClothes;
  }
};
