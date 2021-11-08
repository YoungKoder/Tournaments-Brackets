import { makeStyles, Theme } from "@material-ui/core";

export const useBracketSettingsSidebarStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(0.75, 0.5),
    flex: 1,
  },
  accordionSummaryTitleRow: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.spacing(1.5),
    "& svg": {
      marginRight: theme.spacing(1.75),
    },
  },
  detailsContentWrapper: {
    padding: theme.spacing(0.25, 0.5, 1, 0.5),
    backgroundColor: theme.palette.primary.light,
  },
}));
