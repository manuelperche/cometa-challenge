import React from "react";
import { Grid, Typography, Paper, Container, Checkbox } from "@mui/material";
import { getDate } from "../utility/dateUtils";
import FormikCheckbox from "./FormikCheckbox";

type Props = {
  id: string;
  name: string;
  dueDate: Date;
  price: string;
  interest: string;
  index: number;
};

const CuotasPendientesRow = ({ id, name, dueDate, interest, price, index }: Props) => {
  let totalPay = parseFloat(price);
  if (interest) {
    totalPay += parseFloat(interest);
  }
  return (
    <Container key={id} sx={{ my: "10px", px: "20px" }}>
      <Paper elevation={0}>
        <Grid container>
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={8}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="p">
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Vence el {getDate(dueDate)}
                  </Typography>
                </Grid>
              </Grid>
              {interest ? (
                <Grid item xs={4}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" component="p" textAlign="end">
                      {`$${price}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" component="p" textAlign="end">
                      {`Interés: $ ${interest}`}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={4} sx={{ py: "9px" }}>
                  <Typography variant="subtitle1" component="p" textAlign="end">
                    {`$${price}`}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <FormikCheckbox name="checked" type="checkbox" value={id} index={index}/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CuotasPendientesRow;
