import { Box, Typography, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
} from "./CustomBracketSettingAccordion";
import { ParticipantsList } from "./ParticipantsList";
import { useObserver } from "mobx-react-lite";
import { useBracketsStore } from "../../Brackets/bracketsContext";
import { useBracketSettingsSidebarStyles } from "./styles/useBracketSettingsSidebarStyles";
import { fairSeeding } from "../../../Utility/bracketConstructor";

export interface BracketSettingsSidebarProps {
  bracketId: string;
}

export const BracketSettingsSidebar: React.FC<BracketSettingsSidebarProps> = ({
  bracketId,
}) => {
  const classes = useBracketSettingsSidebarStyles();
  const bracketsStore = useBracketsStore();

  useEffect(() => {
    console.log(fairSeeding(bracketsStore.getParticipants(bracketId)));
  }, [bracketsStore.getParticipants(bracketId)]);

  return useObserver(() => (
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
              participantsList={bracketsStore.getParticipants(bracketId)}
              addParticipant={bracketsStore.addNewParticipant(bracketId)}
              deleteParticipant={bracketsStore.deleteParticipant(bracketId)}
              editParticipant={bracketsStore.editParticipant(bracketId)}
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
  ));
};
