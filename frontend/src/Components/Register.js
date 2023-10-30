import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import CustomSnackBar from "./Alert";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "Hello",
    sev: "info",
    Transition: Fade,
  });
  const { open } = state;
  const handleClick = () => {
    setState({ ...state, open: true });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.email)
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const navigate = useNavigate();
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba( 255, 255, 255, 0.3 )",
          backdropFilter: "blur( 4px )",
        }}
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold" fontFamily="Oswald">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First Name"
              name="first-name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="last-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/Login");
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Already Registered! Login
            </Button>
          </Box>
        </Box>
      </Grid>
      {open && (
        <CustomSnackBar
          {...state}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      )}
    </>
  );
};
export default Register;
