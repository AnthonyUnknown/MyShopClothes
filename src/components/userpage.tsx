import { apiChangeInfo } from "@/api";
import ButtonSubmit from "@/elements/buttonSubmit";
import InputAuth from "@/elements/inputAuth";
import { IUserUser } from "@/interfaces";
import useTypedSelector from "@/redux/useTypedSelector";
import { SyntheticEvent, useEffect, useState } from "react";
import classes from "./componentsStyles/userpage.module.css";

const Userpage: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [index, setIndex] = useState("");

  function onChangeName(e: SyntheticEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  function onChangeSurname(e: SyntheticEvent<HTMLInputElement>) {
    setSurname(e.currentTarget.value);
  }

  function onChangePhone(e: SyntheticEvent<HTMLInputElement>) {
    setPhone(e.currentTarget.value);
  }

  function onChangeCity(e: SyntheticEvent<HTMLInputElement>) {
    setCity(e.currentTarget.value);
  }

  function onChangeAdress(e: SyntheticEvent<HTMLInputElement>) {
    setAdress(e.currentTarget.value);
  }

  function onChangeIndex(e: SyntheticEvent<HTMLInputElement>) {
    setIndex(e.currentTarget.value);
  }

  const user = useTypedSelector((state) => state.user.user);

  async function onChangeUserpage(e: SyntheticEvent) {
    e.preventDefault();
    try {
      let response = await apiChangeInfo(name, surname, phone, city, adress, index, user?.id);
      localStorage.setItem("user", JSON.stringify(response));
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    let localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
      let userLog: IUserUser = JSON.parse(localStorageUser);
      setName(userLog.name);
      setSurname(userLog.surname);
      setPhone(userLog.phone);
      setCity(userLog.city);
      setAdress(userLog.adress);
      setIndex(userLog.index);
    }
  }, []);

  return (
    <form onSubmit={onChangeUserpage}>
      <div className={classes.userpage}>
        <div className={classes.wrapper}>
          <div className={classes.leftBlockUser}>
            <div className={classes.info}>Change your personal information:</div>
            <div className={classes.inputBlock}>
              <InputAuth
                value={name}
                onChange={onChangeName}
                type="text"
                labelname="Name:"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div className={classes.inputBlock}>
              <InputAuth
                value={surname}
                onChange={onChangeSurname}
                type="text"
                labelname="Surname:"
                name="surname"
                placeholder="Your surname"
              />
            </div>
            <div className={classes.inputBlock}>
              <InputAuth
                value={phone}
                onChange={onChangePhone}
                type="tel"
                labelname="Phone:"
                name="phone"
                placeholder="Your phone"
              />
            </div>
            <div className={classes.inputBlock}>
              <InputAuth
                value={city}
                onChange={onChangeCity}
                type="text"
                labelname="City:"
                name="city"
                placeholder="Your city"
              />
            </div>
            <div className={classes.inputBlock}>
              <InputAuth
                value={adress}
                onChange={onChangeAdress}
                type="text"
                labelname="Adress:"
                name="adress"
                placeholder="Your adress"
              />
            </div>
            <div className={classes.inputBlock}>
              <InputAuth
                value={index}
                onChange={onChangeIndex}
                type="text"
                labelname="Index:"
                name="index"
                placeholder="Index"
              />
            </div>
            <div className={classes.change}>
              If you want to change your information, fill in the fields and click submit
            </div>
            <div>
              <ButtonSubmit buttonname="Submit" />
            </div>
          </div>
          <div className={classes.rightBlockUser}>
            <div className={classes.info}>Your personal information:</div>
            <div className={classes.infoPers}>{name}</div>
            <div className={classes.infoPers}>{surname}</div>
            <div className={classes.infoPers}>{phone}</div>
            <div className={classes.infoPers}>{city}</div>
            <div className={classes.infoPers}>{adress}</div>
            <div className={classes.infoPers}>{index}</div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Userpage;
