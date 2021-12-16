import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSidebarStyles } from "./styles/useSidebarStyles";
import { useObserver } from "mobx-react-lite";
import clsx from "clsx";
import { stringAvatar } from "../Utility/parseStringAvatar";
import { tournamentsStore } from "../Components/Brackets/tournamentStore";

export const SideBar: React.FC = () => {
  const classes = useSidebarStyles();
  const history = useHistory();
  const bracketsStore = tournamentsStore;

  return useObserver(() => (
    <Box className={classes.root}>
      <Button size="small" onClick={() => history.push("/")}>
        <Typography className={classes.navItem}>
          <FontAwesomeIcon icon={faHome} />
        </Typography>
      </Button>
      <Typography className={classes.navItem}>...</Typography>
      {bracketsStore.tournaments.map((i) => (
        <Box
          className={clsx({
            [classes.avatarAreaDefault]: !i.active,
            [classes.avatarAreaActive]: i.active,
          })}
          key={i.tid}
        >
          <Button onClick={() => history.push(`/${i.tid}`)}>
            <Avatar
              className={clsx(classes.bracketAvatarCircle, {
                [classes.avatarCircleDefault]: !i.active,
                [classes.avatarCircleActive]: i.active,
              })}
              {...stringAvatar(i.title!)}
            />
          </Button>
        </Box>
      ))}
    </Box>
  ));
};
