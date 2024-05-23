import React, { useState } from "react";
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomApp = () => {
  return (
    <>
      <Accordion title="Section 1" content="Content for Section 1" />
      <Accordion title="Section 2" content="Content for Section 2" />
      <Accordion title="Section 3" content="Content for Section 3" />
    </>
  );
};

export default CustomApp;

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MUIAccordion expanded={expanded} onChange={handleAccordionClick}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </MUIAccordion>
  );
};
