import { useLocalStore } from "mobx-react-lite";
import React from "react";
import { BracketsStoreI, createBracketsStore } from "./bracketsStore";

const BracketsContext = React.createContext<BracketsStoreI>(
  createBracketsStore()
);

export const BracketsProvider: React.FC = ({ children }) => {
  const bracketsStore = useLocalStore(createBracketsStore);
  return (
    <BracketsContext.Provider value={bracketsStore}>
      {children}
    </BracketsContext.Provider>
  );
};

export const useBracketsStore = () => React.useContext(BracketsContext);
