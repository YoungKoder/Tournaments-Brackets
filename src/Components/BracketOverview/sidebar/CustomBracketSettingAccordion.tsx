import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
// import { theme } from "../../../App";
import "./styles/style.css";
import { AccordionDetails, AccordionDetailsProps } from "@mui/material";
import { useTheme } from "../../../hooks/useTheme";

export const useAccordion = () => {
  const [theme] = useTheme();

  const CustomAccordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    backgroundColor: "rgba(0,0,0,0)",
    color: theme.palette.secondary.light,
    marginBottom: theme.spacing(0.75),
    "& .Mui-expanden": {
      borderBottom: `1px solid ${theme.palette.primary.light}`,
      color: theme.palette.primary.light,
    },
  }));

  const CustomAccordionSummary = styled((props: AccordionSummaryProps) => (
    <AccordionSummary {...props} />
  ))(() => ({
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    margin: 0,
    padding: theme.spacing(0.5),
    minHeight: theme.spacing(2.25),
    transition: ".4s all ease",
  }));

  const CustomAccordionDetails = styled((props: AccordionDetailsProps) => (
    <AccordionDetails {...props} />
  ))(() => ({
    padding: theme.spacing(0.5, 0),
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  }));

  return [CustomAccordion, CustomAccordionSummary, CustomAccordionDetails];
};
