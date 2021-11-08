import { makeStyles, Theme } from "@material-ui/core";

export const useBracketsStyles = makeStyles((theme: Theme) => ({
  bracketsCountRow: {
    "& span": {
      fontSize: theme.spacing(1.25),
      color: theme.palette.common.white,
    },
  },
}));
