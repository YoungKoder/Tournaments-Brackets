import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { BracketItemCard } from "./BracketItemCard";
import { TournamentEntityStore } from "./tournamentStore";
import { useBracketsTemplateStyles } from "./styles/useBracketsTemplateStyles";

interface BracketsTemplateI {
  brackets: Array<TournamentEntityStore>;
  addBracket: (name: string) => void;
}

export const BracketsTemplate: React.FC<BracketsTemplateI> = ({
  brackets,
  addBracket,
}) => {
  const classes = useBracketsTemplateStyles();
  const history = useHistory();

  const handleClickItemCard = (bracketId: number) => () => {
    history.push(`/${bracketId}`);
  };

  return (
    <Box className={classes.root}>
      {brackets.map((i) => (
        <BracketItemCard
          key={i.tid}
          imgSource="https://pbs.twimg.com/media/FAoFi9fUcAAmIvd.jpg"
          name={i.title!}
          onClick={handleClickItemCard(i.tid!)}
        />
      ))}
      <Card
        onClick={() => addBracket("New Bracket")}
        className={classes.createNewCard}
      >
        <CardActionArea className={classes.createNewCardContent}>
          <Typography component="span">+</Typography>
        </CardActionArea>
      </Card>
    </Box>
  );
};
