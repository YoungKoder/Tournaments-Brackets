import React from "react";
import { Route, Switch } from "react-router-dom";
import { BracketOverviewPage } from "./Routes/BracketOverviewPage";
import { Home } from "./Routes/Home";
import { AppDispatch } from "./store";
import { checkIsAuthAsync } from "./features/User/userSlice";
import { useDispatch } from "react-redux";

const Routes: React.FC = () => {
  // const breadCrumbsStore = useBreadcrumbsStore();
  // const bracketsStore = useBracketsStore();
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(checkIsAuthAsync());
  }, []);

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/:bracketId"
        exact
        render={(props) => {
          return (
            <BracketOverviewPage bracketId={props.match.params.bracketId} />
          );
        }}
      />
    </Switch>
  );
};

export default Routes;
