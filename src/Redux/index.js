const { createStore } = require("redux");

const initialState = {
  userData: {},
  korzina: [],
  categories: [],
  products: {},
  orders: {},
  users: {},
  rols: {
    user: "user",
    admin: "admin",
    yetkazuvchi: "yetkazuvchi",
    superAdmin: "superAdmin",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: { ...action.payload } };
    case "GET_PRODUCTS":
      return { ...state, products: { ...action.payload } };
    case "GET_ORDERS":
      return { ...state, orders: { ...action.payload } };
    case "USER_DATA":
      return { ...state, userData: { ...action.payload } };
    case "GET_USERS":
      return { ...state, users: { ...action.payload } };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
