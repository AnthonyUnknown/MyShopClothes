export interface IClothes {
  id: number;
  title: string;
  price: number;
  sizes: string[];
  description: string;
  pic: string;
}

export interface ICloth {
  cloth: IClothes;
}

export interface IUserUser {
  email: string;
  id: number;
  name: string;
  surname: string;
  phone: string;
  city: string;
  adress: string;
  index: string;
}

export interface IUser {
  accessToken: "string";
  user: IUserUser;
}
