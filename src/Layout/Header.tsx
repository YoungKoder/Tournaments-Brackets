import { AppBar, Box, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbsStore } from "../Components/Breadcrumbs/breadcrumbsContext";
import { UserArea } from "../features/User/components/UserArea";
import { useHeaderStyles } from "./styles/useHeaderStyles";

export const Header: React.FC = observer(() => {
  const classes = useHeaderStyles();
  const breadCrumbsStore = useBreadcrumbsStore();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Box>
        <Typography className={classes.appTitle} component="span">
          {"Tournamets & Brackets"}
        </Typography>
        <Box component="span">
          {breadCrumbsStore &&
            breadCrumbsStore.breadCrumbs.map((i) => (
              <Link key={i} to="/">
                {i}
              </Link>
            ))}
        </Box>
      </Box>
      <UserArea />
    </AppBar>
  );
});
