import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSidebarStyles } from "./styles/useSidebarStyles";
import { useBracketsStore } from "../Components/Brackets/bracketsContext";
import { observer } from "mobx-react-lite";
import clsx from "clsx";
import { stringAvatar } from "../Utility/parseStringAvatar";

export const SideBar: React.FC = observer(() => {
  const classes = useSidebarStyles();
  const history = useHistory();
  const bracketsStore = useBracketsStore();

  return (
    <Box className={classes.root}>
      <Button size="small" onClick={() => history.push("/")}>
        <Typography className={classes.navItem}>
          <FontAwesomeIcon icon={faHome} />
        </Typography>
      </Button>
      <Typography className={classes.navItem}>...</Typography>
      {bracketsStore.brackets.map((i) => (
        <Box
          className={clsx({
            [classes.avatarAreaDefault]: !i.active,
            [classes.avatarAreaActive]: i.active,
          })}
          key={i.id}
        >
          <Button onClick={() => history.push(`/${i.id}`)}>
            <Avatar
              className={clsx(classes.bracketAvatarCircle, {
                [classes.avatarCircleDefault]: !i.active,
                [classes.avatarCircleActive]: i.active,
              })}
              {...stringAvatar(i.name)}
            />
          </Button>
        </Box>
      ))}
    </Box>
  );
});
