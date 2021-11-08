import { makeStyles, Theme } from "@material-ui/core";

export const useBracketsTemplateStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  createNewCard: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(8.75),
    width: theme.spacing(11.125),

    [theme.breakpoints.up("md")]: {
      height: theme.spacing(12.5),
      width: theme.spacing(13.5),
    },
    "&:before": {
      content: "+",
      position: "absolute",
    },
  },
  createNewCardContent: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    "& span": {
      fontSize: theme.spacing(5),
      fontWeight: "bold",
      color: theme.palette.common.white,
    },
  },
}));
