import { useLocalStore } from "mobx-react-lite";
import React from "react";
import { createBreadcrumbsStore } from "./breadcrumbsStore";

const BreadcrumbsContext = React.createContext<null | {
  breadCrumbs: Array<string>;
  setBreadCrumbs: (newBreadCrumbs: Array<string>) => void;
}>(null);

export const BreadcrumbsProvider: React.FC = ({ children }) => {
  const bracketsStore = useLocalStore(createBreadcrumbsStore);
  return (
    <BreadcrumbsContext.Provider value={bracketsStore}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbsStore = () => React.useContext(BreadcrumbsContext);
