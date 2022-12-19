import { createContext } from "react";

const UserContext = createContext({ userUid: "", setUserUid: () => {} });

export default UserContext;
