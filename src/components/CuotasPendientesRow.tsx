import React from "react";
import { Grid, Typography, Paper, Container, Checkbox } from "@mui/material";
import { getDate } from "../utility/dateUtils";

type Props = {
  id: string;
  name: string;
  dueDate: Date;
  price: string;
  interest: string;
};

const CuotasPendientesRow = ({ id, name, dueDate, interest, price }: Props) => {
  return (
    <Container key={id} sx={{ my: "10px", px: "20px" }}>
      <Paper elevation={0}>
        <Grid container>
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="subtitle1" component="p">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" component="p" textAlign="end">
                  {`$${price}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="body2" component="p">
                  Vence el {getDate(dueDate)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" component="p" textAlign="end">
                  {`Interés: $ ${interest}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Checkbox />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CuotasPendientesRow;
