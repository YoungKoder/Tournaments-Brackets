import { Box, Typography, Paper } from "@material-ui/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { useAccordion } from "./CustomBracketSettingAccordion";
import { ParticipantsList } from "./ParticipantsList";
import { useBracketsStore } from "../../Brackets/bracketsContext";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { observer } from "mobx-react";

export interface BracketSettingsSidebarProps {
  bracketId: string;
}

export const BracketSettingsSidebar: React.FC<BracketSettingsSidebarProps> =
  observer(({ bracketId }) => {
    const classes = useBracketSettingsSidebarStyles();
    // const bracketsStore = useBracketsStore();
    const [CustomAccordion, CustomAccordionSummary, CustomAccordionDetails] =
      useAccordion();

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
              {/* <ParticipantsList
                participantsList={bracketsStore.getParticipants(bracketId)}
                addParticipant={bracketsStore.addNewParticipant(bracketId)}
                deleteParticipant={bracketsStore.deleteParticipant(bracketId)}
                editParticipant={bracketsStore.editParticipant(bracketId)}
              /> */}
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
