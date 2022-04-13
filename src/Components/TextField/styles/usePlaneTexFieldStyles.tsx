import { makeStyles, Theme } from "@material-ui/core";

export const useTBTextFieldStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(1),
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(0.5, 0.75),
    },
    "& .MuiInputBase-root": {
      marginTop: theme.spacing(0.5),
    },
    "& .MuiInputLabel-root": {
      position: "static",
      transform: "none",
    },
  },
}));
