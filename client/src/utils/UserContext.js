import { createContext } from "react";

const UserContext = createContext({
  id: "",
  business_vendor: ""
});

export default UserContext;
