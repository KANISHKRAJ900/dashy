import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [change, setChange] = React.useState(false);
  return (
    <>
      <Container component="main" maxWidth="xs" className="glass">
        <CssBaseline />
        <div className="mt-4">
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="https://images.saatchiart.com/saatchi/19363/art/9163761/8226913-JGPPIPSN-6.jpg"
              alt="green iguana"
            />
          </Card>
        </div>
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
            Welcome to
          </Typography>
          <Typography component="h1" variant="h4">
            Rahil 's Gallery
          </Typography>
          <div className="mt-3 btngroup">
            <span className="btn">
              <Link to="/register"> Register</Link>
            </span>

            <span className="btn1 ">
              {" "}
              <Link to="/">Sign In</Link>
            </span>
          </div>
        </Box>
      </Container>
    </>
  );
}
