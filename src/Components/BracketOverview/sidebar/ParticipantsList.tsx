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
import { useParticipantsListStyle } from "./styles/useParticipantsListStyles";
import { ParticipantI } from "../../Brackets/tournamentTypes";
import { TournamentEntityStore } from "../../Brackets/tournamentStore";

export interface ParticipantsListProps {
  participantsList: Array<ParticipantI>;
  addParticipant?: (props: {
    name?: string;
    position?: number;
  }) => Generator<
    | Promise<Response>
    | Generator<Promise<Response>, void, TournamentEntityStore>,
    void,
    unknown
  >;
  deleteParticipant?: (
    data: ParticipantI
  ) => Generator<
    Promise<Response> | Generator<Promise<Response>, any, unknown>,
    any,
    unknown
  >;
  editParticipant?: (
    data: ParticipantI
  ) => Generator<
    | Promise<Response>
    | Generator<Promise<Response>, void, TournamentEntityStore>,
    void,
    unknown
  >;
  handleEditingParticipant?: (uid: number, value: string) => void | undefined;
}

export const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participantsList,
  addParticipant = () => {},
  deleteParticipant = () => {},
  editParticipant = () => {},
  handleEditingParticipant = () => {},
}) => {
  const classes = useParticipantsListStyle();
  const handleChange =
    (participantId: number) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      handleEditingParticipant(participantId, event.target.value);
    };

  return (
    <Box>
      <Box className={classes.headerRow}>
        <Typography>List</Typography>
        <IconButton
          onClick={() => addParticipant({})}
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
            key={item.uid}
            value={item.name}
            onChange={handleChange(item.uid)}
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    className={classes.deleteParticipantButton}
                    onClick={() => deleteParticipant(item)}
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
