import { createModalContext } from "./modalStore";
import React from "react";
import { useLocalObservable } from "mobx-react";
const ModalContext = React.createContext(createModalContext());

export const ModalProvider: React.FC = ({ children }) => {
  const bracketsStore = useLocalObservable(createModalContext);
  return (
    <ModalContext.Provider value={bracketsStore}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalStore = () => React.useContext(ModalContext);
