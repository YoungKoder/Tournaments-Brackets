import { Paper, Theme } from "@material-ui/core";
import { makeStyles } from "@mui/material";
import React from "react";

export const useAccordionStyles = makeStyles((theme: Theme) => ({}));

interface AccordionPropsI {
  accordionHeader: React.ReactNode;
  accordionBody: React.ReactNode;
}

export const Accordion: React.FC<AccordionPropsI> = ({
  accordionHeader,
  accordionBody,
}) => {
  return <Paper elevation={0}></Paper>;
};
