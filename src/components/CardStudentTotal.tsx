import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useStudent } from "../context";

const CardStudentTotal = () => {
  const { student } = useStudent();
  return (
    <Paper elevation={0} sx={{ mt: "15px" }}>
      <Grid container sx={{ px: "25px", pt: "13px" }}>
        <Grid item xs={6}>
          <Typography variant="body2" component="p" textAlign="start">
            {student?.first_name} {student?.last_name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="p" textAlign="end">
            {student?.cohort}
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: "25px", py: "15px" }}>
        <Grid item xs={6}>
          <Typography variant="body1" component="p" textAlign="start">
            Total a Pagar
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" component="p" textAlign="end">
            $ ---
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardStudentTotal;
