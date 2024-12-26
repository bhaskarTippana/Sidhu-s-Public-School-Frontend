import React from "react";
import NavBar from "./NavBar";
import { Card, Grid, IconButton, Tooltip } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import landing1 from "../Assets/landing1.png";
interface CardWithIconProps {
    title: string;
    IconComponent: React.ElementType;
  }
// Reusable CardWithIcon component
const CardWithIcon: React.FC<CardWithIconProps> = ({ title, IconComponent }) => (
  <Card
    sx={{
      height: "250px",
      width: "250px",
      border: "1px solid limegreen",
      display: "grid",
      placeItems: "center",
      padding: "10px",
    }}
  >
    <Tooltip title={title}>
      <IconButton sx={{ height: "150px", width: "150px" }}>
        <IconComponent sx={{ height: "125px", width: "125px" }} />
      </IconButton>
    </Tooltip>
  </Card>
);

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Grid
        container
        sx={{
          height: `calc(100vh - 65px)`,
          backgroundImage: `url(${landing1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        display={"flex"}
        alignItems={"center"}
        p={5}
      >
        <Grid item xs={3}>
          <CardWithIcon title="Admin" IconComponent={ManageAccountsIcon} />
        </Grid>
        <Grid item xs={3}>
          <CardWithIcon title="Teacher" IconComponent={GroupsIcon} />
        </Grid>
        <Grid item xs={3}>
          <CardWithIcon title="Parent" IconComponent={FamilyRestroomIcon} />
        </Grid>
        <Grid item xs={3}>
          <CardWithIcon title="Student" IconComponent={PeopleIcon} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
