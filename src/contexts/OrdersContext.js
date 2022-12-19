import { createContext } from "react";

const OrdersContext = createContext({ orders: [], setOrders: () => { }, done: [], setDone: () => { } });

export default OrdersContext;
