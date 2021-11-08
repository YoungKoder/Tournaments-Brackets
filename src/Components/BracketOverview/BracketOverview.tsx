import { Box } from "@material-ui/core";
import React from "react";
import { BracketSettingsSidebar } from "./sidebar/BracketSettingsSidebar";
import { useBracketOverviewStyles } from "./styles/useBracketOverviewStyles";

export interface BracketOverviewProps {
  bracketId: string;
}

export const BracketOverview: React.FC<BracketOverviewProps> = ({
  bracketId,
}) => {
  const classes = useBracketOverviewStyles();
  return (
    <Box className={classes.root}>
      <BracketSettingsSidebar bracketId={bracketId} />
      <Box sx={{ flex: 5 }}></Box>
    </Box>
  );
};
