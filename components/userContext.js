import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  return (
    <UserContext.Provider
      value={{ userName, isConnected, setUserName, setIsConnected }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
