import { makeStyles, Theme } from "@material-ui/core";

export const useFormStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1.5),
  },
}));
