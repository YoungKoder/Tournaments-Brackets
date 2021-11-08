import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { BracketOverview } from "../Components/BracketOverview/BracketOverview";
import { Layout } from "../Layout/Layout";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
}));
interface BracketOverviewPropsI {
  bracketId: string;
}

export const BracketOverviewPage: React.FC<BracketOverviewPropsI> = ({
  bracketId,
}) => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <BracketOverview bracketId={bracketId} />
    </Layout>
  );
};
