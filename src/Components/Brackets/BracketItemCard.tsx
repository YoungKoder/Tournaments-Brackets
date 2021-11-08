import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useBracketItemCardStyles } from "./styles/useBracketItemCard";

interface BracketItemCardProps {
  imgSource: string;
  name: string;
  onClick: () => void;
}
export const BracketItemCard: React.FC<BracketItemCardProps> = ({
  imgSource = "",
  name,
  onClick,
}) => {
  const classes = useBracketItemCardStyles();
  const renderCardMedia = (imgSource: string) => {
    if (imgSource !== "") {
      return (
        <CardMedia
          component="img"
          className={classes.cardMediaWrapper}
          image={imgSource}
          alt="Tournament img"
        />
      );
    }
    return (
      <CardMedia
        component="div"
        className={clsx(classes.cardMediaDefault, classes.cardMediaWrapper)}
      >
        <FontAwesomeIcon icon={faImage} />
      </CardMedia>
    );
  };
  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        {renderCardMedia(imgSource)}
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardNameLabel}>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
