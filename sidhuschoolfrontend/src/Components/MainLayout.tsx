import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import NavBar from './NavBar';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import PaymentIcon from '@mui/icons-material/Payment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const MainLayout = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 'fit-content', height: "fit-content", bgcolor: '#e6e6e6' }} role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
                {[{ name: "Dashboard", icon: <HomeIcon /> },
                  { name: "Users", icon: <GroupIcon /> },
                  { name: "Classes", icon: <SchoolIcon /> },
                  { name: "Attendance", icon: <CheckCircleIcon /> },
                  { name: "Grades", icon: <GradeIcon /> },
                  { name: "Timetable", icon: <AccessTimeIcon /> },
                  { name: "Events", icon: <EventIcon /> },
                  { name: "Communication", icon: <MessageIcon /> },
                  { name: "Fees", icon: <PaymentIcon /> },
                  { name: "Reports", icon: <AssessmentIcon /> },
                  { name: "Settings", icon: <SettingsIcon /> },
                  { name: "Support", icon: <HelpIcon /> }]
                    .map((text) => (
                        <ListItem key={text.name} disablePadding>
                            <Link to={`/admin/${text.name.toLowerCase()}`} style={{ textDecoration: 'none',color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text.name.split("_").join(" ")}
                                        sx={{ textTransform: "capitalize" }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Grid container>
            <Grid item xs={12} height={'65px'} bgcolor={'#e6e6e6'} width={'100%'}>
                <NavBar open={open} toggleDrawer={toggleDrawer} />
            </Grid>
            <Grid item xs={12} sx={{ height: `calc(100vh - 65px)` }}>
                <Grid container>
                    <Grid item xs={2}>
                        <Box>{DrawerList}</Box>
                    </Grid>
                    <Grid item xs={10}>
                        <Outlet /> {/* Content will be rendered here */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainLayout;
