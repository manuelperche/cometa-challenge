import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useOrders } from "../context";
import CuotasPendientesRow from "./CuotasPendientesRow";

interface Props {
  type: "pendientes" | "futuras";
}

const CardCuotasPendientes = (props: Props) => {
  const { type } = props;
  const { orders } = useOrders();
  return (
    <Box sx={{ my: "15px" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle2" component="p">
                {type === "pendientes" ? "Cuotas pendientes" : "Cuotas futuras"}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {orders.map((order, index, arr) => {
            if (type === "pendientes" ? order.status === "DUE" : order.status === "OUTSTANDING") {
              const dueDate = new Date(order.due);
              return <CuotasPendientesRow id={order.id} name={order.name} dueDate={dueDate} interest={order.interest} price={order.price} />;
            }
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CardCuotasPendientes;
