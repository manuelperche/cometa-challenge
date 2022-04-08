import React from "react";
import { Accordion, AccordionSummary, Grid, Typography, AccordionDetails } from "@mui/material";
import { getDate } from "../utility/dateUtils";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

type Props = {
  id: string;
  name: string;
  payDate: Date;
  dueDate: Date;
  interest: string;
};

const AccordionCuotasPagadas = ({ id, name, payDate, dueDate, interest } : Props) => {
  return (
    <Accordion key={id}>
      <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1" component="p">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="p">
              Pagado el {getDate(payDate)}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <Grid container sx={{ px: "25px" }}>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" textAlign="start">
              Vence: {getDate(dueDate)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" textAlign="start">
              {`Intereses: $${interest}`}
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCuotasPagadas;