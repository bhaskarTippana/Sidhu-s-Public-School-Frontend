import { AppBar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

// Sidebar component (renamed to SideBar)
const SideBar = () => {
    return (
        <Box overflow={'auto'} height={'calc(100vh - 65px)'} width={'250px'}   >
            <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'grid', placeItems: 'center', gap: '10px', backgroundColor: 'limegreen' }}  >
                {/* List of nav items */}
                {Array(34).fill('Nav Items').map((item, index) => (
                    <Typography key={index} component={'li'} >{item}</Typography>
                ))}
            </ul>
        </Box>
    );
};


const ContainerFluid = () => {
    return (
        <Box flexGrow={1} height={'calc(100vh - 65px)'} p={2} overflow={'auto'} >
            {/* <Outlet />         */}
        </Box>
    );
}

// MainLayout component
const MainLayout = () => {
    return (<>
        <Box >
            <AppBar position="sticky" sx={{ height: "65px" }}>
                {/* Add AppBar content here */}
            </AppBar>
            {/* Other content for the main section */}

        </Box>
        <Box component={Stack} direction={'row'} >
            <SideBar />
            <ContainerFluid />
        </Box>
    </>

    );
};

export default MainLayout;
