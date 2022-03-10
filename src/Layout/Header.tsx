import { AppBar, Box, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbsStore } from "../Components/Breadcrumbs/breadcrumbsContext";
import { SimpleButton } from "../Components/UiElements/Buttons/TBButton";
import { useModalStore } from "../Components/UiElements/Modal/modalContext";
import { useHeaderStyles } from "./styles/useHeaderStyles";
export const Header: React.FC = observer(() => {
  const classes = useHeaderStyles();
  const breadCrumbsStore = useBreadcrumbsStore();
  const modalContext = useModalStore();
  modalContext.children = () => (
    <Box>
      <Typography>Test</Typography>
    </Box>
  );
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
      <SimpleButton
        variant="contained"
        onClick={() => modalContext.switchModal(true)}
      >
        Register
      </SimpleButton>
    </AppBar>
  );
});
