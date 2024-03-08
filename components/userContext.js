import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = React.useState("");
  const [isConnected, setIsConnected] = React.useState(false);

  return (
    <UserContext.Provider
      value={{ userName, setUserName, isConnected, setIsConnected }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
