import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./Login";
import Grid from "@mui/material/Grid";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
const Home = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #9796f0, #fbc7d4)",
      }}
    >
      <CssBaseline />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Grid>
  );
};

export default Home;
