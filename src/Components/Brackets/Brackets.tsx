import { Box, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { BracketsTemplate } from "./BracketsTemplate";
import { useBracketsStyles } from "./styles/useBracketsStyle";
import { tournamentsStore } from "./tournamentStore";

export const Brackets: React.FC = observer(() => {
  const classes = useBracketsStyles();
  const bracketsStore = tournamentsStore;
  return (
    <Box>
      <Box className={classes.bracketsCountRow}>
        <Typography component="span">Your total tables count </Typography>
        <Typography component="span">
          {bracketsStore.tournaments.length}
        </Typography>
      </Box>
      <BracketsTemplate
        brackets={bracketsStore.tournaments}
        addBracket={bracketsStore.addTournament}
      />
    </Box>
  );
});
