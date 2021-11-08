import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ParticipantI } from "../../Brackets/bracketsStore";
import { useParticipantsListStyle } from "./styles/useParticipantsListStyles";

export interface ParticipantsListProps {
  participantsList: Array<ParticipantI>;
  addParticipant: () => void;
  deleteParticipant: (participantId: string) => () => void;
  editParticipant: (participantId: string, value: string) => void;
}

export const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participantsList,
  addParticipant,
  deleteParticipant,
  editParticipant,
}) => {
  const classes = useParticipantsListStyle();
  const handleChange =
    (participantId: string) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      editParticipant(participantId, event.target.value);
    };

  return (
    <Box>
      <Box className={classes.headerRow}>
        <Typography>List</Typography>
        <IconButton
          onClick={addParticipant}
          className={classes.addParticipantButton}
          size="small"
        >
          +
        </IconButton>
      </Box>
      <Box className={classes.usersList}>
        {participantsList.map((item) => (
          <TextField
            className={classes.root}
            key={item.participantId}
            value={item.name}
            onChange={handleChange(item.participantId)}
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    className={classes.deleteParticipantButton}
                    onClick={deleteParticipant(item.participantId)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
