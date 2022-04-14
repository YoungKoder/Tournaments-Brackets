import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSidebarStyles } from "./styles/useSidebarStyles";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

interface NavButtons {
  play: boolean;
}
export const SideBar: React.FC = () => {
  const classes = useSidebarStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Box className={classes.root}>
      <Box>
        <Button size="small" onClick={() => history.push("/")}>
          <Typography className={classes.navItem}>
            <FontAwesomeIcon icon={faHome} />
          </Typography>
        </Button>
      </Box>

      <Typography className={classes.navItem}>...</Typography>
      <Box
        className={clsx({
          [classes.avatarAreaDefault]: location.pathname === "/play",
          [classes.avatarAreaActive]: location.pathname === "/play",
        })}
      >
        <Button onClick={() => history.push("/play")}>
          <Typography className={classes.navItem}>
            <FontAwesomeIcon icon={faGamepad} />
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
