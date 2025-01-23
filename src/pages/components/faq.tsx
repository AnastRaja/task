import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";

export default function AccordionUsage() {
  const [expandedPanel, setExpandedPanel] = useState("panel1"); // Default to "panel1"

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  const iconStyle = (isExpanded) => ({
    backgroundColor: isExpanded ? "#4A3AFF" : "#F7F7FF",
    borderRadius: "8px",
    color: isExpanded ? "white" : "#6F6C90",
    padding: "4px 6px",
    fontSize: "18px",
  });

  return (
    <div>
      <div className="container">
        <div className="panel-content contract-content panel-content1 ">
          <div>
            <h2> Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel1")}>
                    {expandedPanel === "panel1" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordion-text "
              >
                What is Law Blocks?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box mt-3"
              expanded={expandedPanel === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel2")}>
                    {expandedPanel === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel2-content"
                id="panel2-header"
                className="mt-3 accordion-text"
              >
                Why create, store, and maintain your legal document with
                Lawblocks?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box mt-3"
              expanded={expandedPanel === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel3")}>
                    {expandedPanel === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel3-content"
                id="panel3-header"
                className="mt-3 accordion-text"
              >
                How does Law Blocks revolutionize dispute resolution through ODR
                and ADR?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 accordion-m">
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel4")}>
                    {expandedPanel === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel4-content"
                id="panel4-header"
                className="accordion-text"
              >
                How does Law Blocks work with Blockchain?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel5")}>
                    {expandedPanel === "panel5" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel5-content"
                id="panel5-header"
                className="mt-3 accordion-text"
              >
                How does Law Blocks reduce the cost of the legal process?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel6")}>
                    {expandedPanel === "panel6" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel6-content"
                id="panel6-header"
                className="mt-3 accordion-text"
              >
                How does Law Blocks revolutionize dispute resolution through ODR
                and ADR?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
