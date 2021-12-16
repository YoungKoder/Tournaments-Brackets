import { Box, Typography, Paper } from "@material-ui/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
} from "./CustomBracketSettingAccordion";
import { ParticipantsList } from "./ParticipantsList";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { tournamentsStore } from "../../Brackets/tournamentStore";
import { observer } from "mobx-react";

export interface BracketSettingsSidebarProps {
  bracketId: string;
}

export const BracketSettingsSidebar: React.FC<BracketSettingsSidebarProps> =
  observer(({ bracketId }) => {
    const classes = useBracketSettingsSidebarStyles();
    const useTournaments = tournamentsStore;

    return (
      <Box className={classes.root}>
        <CustomAccordion>
          <CustomAccordionSummary expandIcon={<></>}>
            <Typography
              className={classes.accordionSummaryTitleRow}
              component="p"
            >
              <FontAwesomeIcon icon={faUsers} />
              <Typography component="span">Users</Typography>
            </Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Paper className={classes.detailsContentWrapper}>
              <ParticipantsList
                participantsList={
                  useTournaments.tournaments.find((i) => i.tid === +bracketId)
                    ?.participants || []
                }
                addParticipant={
                  useTournaments.tournaments.find((i) => i.tid === +bracketId)
                    ?.addParticipant
                }
                deleteParticipant={
                  useTournaments.tournaments.find((i) => i.tid === +bracketId)
                    ?.deleteParticipant
                }
                editParticipant={
                  useTournaments.tournaments.find((i) => i.tid === +bracketId)
                    ?.updateParticipant
                }
                handleEditingParticipant={
                  useTournaments.tournaments.find((i) => i.tid === +bracketId)
                    ?.handleEditingParticipant
                }
              />
            </Paper>
          </CustomAccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <CustomAccordionSummary expandIcon={<></>}>
            <Typography
              className={classes.accordionSummaryTitleRow}
              component="p"
            >
              <FontAwesomeIcon icon={faGamepad} />
              <Typography component="span">Games</Typography>
            </Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Paper className={classes.detailsContentWrapper}>
              {/* <ParticipantsList
              participantsList={bracketsStore.getParticipants(bracketId)}
              addParticipant={bracketsStore.addNewParticipant(bracketId)}
              deleteParticipant={bracketsStore.deleteParticipant(bracketId)}
              editParticipant={bracketsStore.editParticipant(bracketId)}
            /> */}
            </Paper>
          </CustomAccordionDetails>
        </CustomAccordion>
      </Box>
    );
  });
