import { AppBar, Breadcrumbs, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbsStore } from "../Components/Breadcrumbs/breadcrumbsContext";
import { useHeaderStyles } from "./styles/useHeaderStyles";
export const Header: React.FC = () => {
  const classes = useHeaderStyles();
  const breadCrumbsStore = useBreadcrumbsStore();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Typography className={classes.appTitle} component="span">
        {"Tournamets & Brackets"}
      </Typography>
      <Breadcrumbs component="span">
        {breadCrumbsStore &&
          breadCrumbsStore.breadCrumbs.map((i) => (
            <Link key={i} to="/">
              {i}
            </Link>
          ))}
      </Breadcrumbs>
    </AppBar>
  );
};
