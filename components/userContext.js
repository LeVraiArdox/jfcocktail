import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [favDrink, setFavDrink] = useState("")

  return (
    <UserContext.Provider
      value={{ userName, isConnected, setUserName, setIsConnected, favDrink, setFavDrink }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;