import { makeStyles, Theme } from "@material-ui/core";

export const useParticipantsListStyle = makeStyles((theme: Theme) => ({
  headerRow: {
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.common.white}`,
    padding: theme.spacing(0, 0.25),
    minHeight: theme.spacing(1.5),
    "& p": {
      fontSize: theme.spacing(1),
    },
  },
  addParticipantButton: {
    color: theme.palette.common.white,
    fontSize: theme.spacing(1.25),
  },
  usersList: {
    marginTop: theme.spacing(0.375),
    minHeight: theme.spacing(5.5),
    maxHeight: theme.spacing(16),
    paddingRight: theme.spacing(0.375),
    overflow: "auto",
    "&::-webkit-scrollbar ": {
      width: "1px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    backgroundColor: theme.palette.common.white,
    borderBottom: "rgba(0,0,0,0)",
    borderRadius: theme.spacing(0.5),
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: theme.spacing(0.125),
    },
    "& input": {
      paddingTop: theme.spacing(0.375),
      paddingBottom: theme.spacing(0.375),
      fontWeight: "bold",
    },
  },
  deleteParticipantButton: {
    fontWeight: "bold",
    fontSize: theme.spacing(1),
    color: theme.palette.common.black,
  },
}));
