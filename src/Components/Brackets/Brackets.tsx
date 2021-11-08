import { Box, Typography } from "@material-ui/core";
import { useObserver } from "mobx-react-lite";
import React from "react";
import { useBracketsStore } from "./bracketsContext";
import { BracketsTemplate } from "./BracketsTemplate";
import { useBracketsStyles } from "./styles/useBracketsStyle";

export const Brackets: React.FC = () => {
  const classes = useBracketsStyles();
  const bracketsStore = useBracketsStore();
  return useObserver(() => (
    <Box>
      <Box className={classes.bracketsCountRow}>
        <Typography component="span">Your total tables count </Typography>
        <Typography component="span">
          {bracketsStore.brackets.length}
        </Typography>
      </Box>
      <BracketsTemplate
        brackets={bracketsStore.brackets}
        addBracket={bracketsStore.addBracket}
      />
    </Box>
  ));
};
