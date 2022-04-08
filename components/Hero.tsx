import React from "react";
import { Avatar, Box, Card, Chip, Typography } from "@mui/material";

const Hero = () => {
  return (
    
      <Card variant="outlined" sx={{ display: 'flex' }}>
        <Avatar>B</Avatar>
        <Typography variant="h5" component="h1" textAlign="center">
          Colegio Brillamont
        </Typography>
      </Card>
  );
};

export default Hero;
