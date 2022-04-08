import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ display: "flex", boxShadow: 3, alignItems: "center", justifyContent: "center", py: 1 }}>
      <Avatar sx={{ backgroundColor: "#828282", width: 38, height: 38, fontWeight: 500 }}>B</Avatar>
      <Typography variant="h6" component="h1" textAlign="center" sx={{ mx: 1, fontWeight: 300 }}>
        Colegio Brillamont
      </Typography>
    </Box>
  );
};

export default Hero;
