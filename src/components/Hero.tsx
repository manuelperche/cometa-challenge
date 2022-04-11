import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useStudent } from "../context";

const Hero = () => {
  const { student } = useStudent();
  return (
    <Box sx={{ display: "flex", boxShadow: 3, alignItems: "center", justifyContent: "center", py: 1 }}>
      <Avatar sx={{ backgroundColor: "#828282", width: 38, height: 38, fontWeight: 500 }}>{student?.school.name.charAt(0)}</Avatar>
      <Typography variant="h6" component="h1" textAlign="center" sx={{ mx: 1, fontWeight: 300 }}>
        {student?.school.name}
      </Typography>
    </Box>
  );
};

export default Hero;
