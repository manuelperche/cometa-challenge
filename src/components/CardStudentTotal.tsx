import { Grid, Paper, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import { useOrders, useStudent } from "../context";

const CardStudentTotal = () => {
  const { student } = useStudent();
  const { orders } = useOrders();
  const { values } = useFormikContext<any>();
  const selectedOrders = orders.filter((order) => values.checked.includes(order.id));
  const payments = selectedOrders.map((order) => {
    let pay = parseFloat(order.price);
    if (order.interest) {
      pay += parseFloat(order.interest);
    }
    return pay;
  });
  const total = payments
    .reduce((a, b) => a + b, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Paper elevation={0} sx={{ mt: "15px" }}>
      <Grid container sx={{ px: "25px", pt: "13px" }}>
        <Grid item xs={6}>
          <Typography variant="body1" component="p" textAlign="start">
            {student?.first_name} {student?.last_name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" component="p" textAlign="end">
            {student?.cohort}
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: "25px", py: "15px" }}>
        <Grid item xs={6}>
          <Typography variant="h6" component="p" textAlign="start">
            Total a Pagar
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="p" textAlign="end">
            {`$ ${total == 0 ? "---" : total}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardStudentTotal;
