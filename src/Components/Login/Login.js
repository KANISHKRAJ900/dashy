import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Apple, Facebook, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <Container component="main" maxWidth="xs" className="glass">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Hello Again!
          </Typography>
          <Typography variant="caption">Welcome back you've</Typography>
          <Typography variant="caption">been missed!</Typography>
          <form action="">
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div className="recovery now">
                <span>Recovery Password</span>
              </div>
              <Button
                color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <div className="continue">
                <span>or continue with</span>
              </div>
              <div className="social">
                <div className="icons google">
                  <Google />
                </div>
                <div className="icons ">
                  <Apple />
                </div>
                <div className="icons facebook">
                  <Facebook />
                </div>
              </div>
              <div className="register">
                <Typography variant="caption">
                  Not a member?{" "}
                  <Link to="/register">
                    <span className="now">Register now</span>
                  </Link>
                </Typography>
              </div>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}
