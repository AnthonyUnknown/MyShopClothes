import axios from "axios";
import { IClothes, IUser, IUserUser } from "./interfaces";
import links from "./links";

export async function fetchClothesHomepage(search: string): Promise<IClothes[]> {
  let response = await axios.get<IClothes[]>(`${links.clothesApi}?title_like=${search}`);
  return response.data;
}

export async function fetchClothesThree(): Promise<IClothes[]> {
  let response = await axios.get<IClothes[]>(`${links.threeClothes}`);
  return response.data;
}

export async function apiReg(emailReg: string, passwordReg: string): Promise<IUser> {
  const response = await axios.post<IUser>(`${links.reg}`, {
    email: emailReg,
    password: passwordReg,
    name: "Change it",
    surname: "Change it",
    phone: "Change it",
    city: "Change it",
    adress: "Change it",
    index: "Change it",
  });
  return response.data;
}

export async function apiLog(emailLog: string, passwordLog: string): Promise<IUser> {
  const response = await axios.post<IUser>(`${links.log}`, {
    email: emailLog,
    password: passwordLog,
  });
  return response.data;
}

export async function apiChangeInfo(
  name: string,
  surname: string,
  phone: string,
  city: string,
  adress: string,
  index: string,
  id: number | undefined
): Promise<IUserUser> {
  const response = await axios.patch(`http://localhost:3000/users/${id}`, {
    name: name,
    surname: surname,
    phone: phone,
    city: city,
    adress: adress,
    index: index,
  });
  return response.data;
}
