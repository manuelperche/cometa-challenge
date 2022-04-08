import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useOrders } from "../context";
import CuotasPendientesRow from "./CuotasPendientesRow";

const CardCuotasPendientes = () => {
  const { orders } = useOrders();
  return (
    <Box sx={{ my: "15px" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle2" component="p">
                Cuotas pendientes
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {orders.map((order) => {
            if (order.status === "DUE") {
              const dueDate = new Date(order.due);
              return (
                <CuotasPendientesRow id={order.id} name={order.name} dueDate={dueDate} interest={order.interest} price={order.price} /> 
              );
            }
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CardCuotasPendientes;
