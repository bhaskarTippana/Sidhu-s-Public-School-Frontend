import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/logo.svg";
import AppsIcon from "@mui/icons-material/Apps";
// import { CustomButton } from "./CustomButton";
// import LoginIcon from "@mui/icons-material/Login";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NavBar = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#e6e6e6",
        position: "static",
        alignItems: "center",
        height:"65px"
      }}
    >
      <Grid item xs={2}>
        <Grid container>
          <Grid
            item
            xs={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <img src={logo} alt="logo" height={"40px"} width={"45px"} />
            <Typography fontSize={"14px"} variant="body1" fontWeight={"bold"}>
              SIDIHU's SCHOOL
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <AppsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8} fontWeight={"bold"}>
        <Grid container>
          <Grid item xs={3} textAlign={"center"}>
            Admissions
          </Grid>
          <Grid item xs={3} textAlign={"center"}>
            Contact Us
          </Grid>
          <Grid item xs={3} textAlign={"center"}>
            About Us
          </Grid>
          <Grid item xs={3} textAlign={"center"}>
            Location
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Tooltip title="Need To Login First">
          <IconButton sx={{ height: "40px", width: "40px", color: "red" }}>
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default NavBar;