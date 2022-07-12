const login = "login";
const register = "registration";
const cart = "cart";
const homePage = "/";
const logOut = "logout";
const apiServer = "http://localhost:3000";
const clothesApi = `${apiServer}/clothes`;
const threeClothes = `${clothesApi}?_start=0&_end=3`;
const reg = `${apiServer}/register`;
const log = `${apiServer}/login`;
const userpage = "userpage";
const basket = "basket";

export default {
  login,
  register,
  cart,
  homePage,
  logOut,
  apiServer,
  clothesApi,
  threeClothes,
  reg,
  log,
  userpage,
  basket,
};
