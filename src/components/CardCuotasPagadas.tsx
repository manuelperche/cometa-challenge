import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useOrders } from "../context";
import { getDate } from "../utility/dateUtils";
import AccordionCuotasPagadas from "./AccordionCuotasPagadas";

const CardCuotasPagadas = () => {
  const { orders } = useOrders();
  return (
    <Box sx={{ my: "15px" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle2" component="p">
                Cuotas pagadas
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" component="p" sx={{ fontSize: "11px", color: "#979797", my: "2px" }}>
                Dale click para expandir
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {orders.map((order) => {
            if (order.status === "PAID") {
              const dueDate = new Date(order.due);
              const payDate = new Date(order.payin.created);
              return (
                <AccordionCuotasPagadas id={order.id} name={order.name} dueDate={dueDate} payDate={payDate} interest={order.interest}/> 
              );
            }
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CardCuotasPagadas;
