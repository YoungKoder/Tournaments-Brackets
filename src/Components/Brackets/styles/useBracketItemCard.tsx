import { makeStyles, Theme } from "@material-ui/core";

export const useBracketItemCardStyles = makeStyles((theme: Theme) => ({
  root: {
    width: theme.spacing(11.125),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(15.125),
    },
    margin: theme.spacing(0, 1.5, 2, 0),
  },
  cardMediaWrapper: {
    height: theme.spacing(5.75),
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(9.75),
    },
  },
  cardMediaDefault: {
    backgroundColor: theme.palette.secondary.dark,
    opacity: 0.6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.spacing(4),
    color: theme.palette.common.white,
  },
  cardContent: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.5, 1),
  },
  cardNameLabel: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(1.125),
    fontWeight: "bold",
  },
}));
