import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./style/variables.scss";
import GlobalStyle from "./style/GlobalStyle";
import { useState, useEffect } from "react";
import Admin from "./pages/Admin";
import Order from "./pages/Admin/Order";
import Add from "./pages/Admin/Add";
import Meal from "./pages/Admin/Meal";
import Done from "./pages/Admin/Done";
import Category from "./pages/Admin/Category";
import Korzina from "./pages/Kirzina";
import OrdersContext from "./contexts/OrdersContext";
import Profile from "./pages/Admin/Profile";

import { getCategories, getProducts, isSignIn } from "./firebase/functions";
import { useDispatch, useSelector } from "react-redux";
import Users from "./pages/Admin/Users";

function App() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [done, setDone] = useState([]);
  useEffect(() => {
    getCategories(dispatch);
    getProducts(dispatch);
    isSignIn(dispatch);
  }, []);
  const userData = useSelector((state) => state.userData);
  const rols = useSelector((state) => state.rols);

  return (
    <OrdersContext.Provider value={{ orders, setOrders, done, setDone }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />}></Route>
          <Route path="/korzina" element={<Korzina />} />
          <Route path="/admin" element={<Admin />}>
            {userData.role === rols.superAdmin && (
              <Route path="users" element={<Users />} />
            )}
            {(userData.role === rols.admin ||
              userData.role === rols.superAdmin) && (
              <Route path="add" element={<Add />}>
                <Route path="meal" element={<Meal />} />
                <Route path="category" element={<Category />} />
              </Route>
            )}
            {userData.role !== rols.user && (
              <>
                <Route path="order" element={<Order />} />
                <Route path="done" element={<Done />} />
              </>
            )}
            <Route path="" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </OrdersContext.Provider>
  );
}

export default App;
