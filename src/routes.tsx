import React from "react";
import { Route, Switch } from "react-router-dom";
import { tournamentsStore } from "./Components/Brackets/tournamentStore";
import { useBreadcrumbsStore } from "./Components/Breadcrumbs/breadcrumbsContext";
import { BracketOverviewPage } from "./Routes/BracketOverviewPage";
import { Home } from "./Routes/Home";

const Routes: React.FC = () => {
  const breadCrumbsStore = useBreadcrumbsStore();
  const bracketsStore = tournamentsStore;
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => {
          bracketsStore.setTournamentUnActive();
          breadCrumbsStore && breadCrumbsStore.setBreadCrumbs(["Brackets"]);
          return <Home />;
        }}
      />
      <Route
        path="/:bracketId"
        exact
        render={(props) => {
          bracketsStore.setTournamentUnActive();
          bracketsStore.setTournamentActive(props.match.params.bracketId);
          return (
            <BracketOverviewPage bracketId={props.match.params.bracketId} />
          );
        }}
      />
    </Switch>
  );
};

export default Routes;
