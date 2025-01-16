import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { BarChart, PieChart } from "@mui/x-charts";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

interface CardProps {
    title: string;
    count: string;
    icon: React.ReactNode;
    backgroundColor: string;
    iconColor: string;
}

const Dashboard: React.FC = () => {
    const InfoCard = ({
        title,
        count,
        icon,
        backgroundColor,
        iconColor,
    }: CardProps) => {
        return (
            <Card
                sx={{
                    backgroundColor,
                    height: "100px",
                    width: "240px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Box>
                    <Typography variant="h6" fontWeight="bold">
                        {count}
                    </Typography>
                    <Typography variant="subtitle2">{title}</Typography>
                </Box>
                <IconButton sx={{ color: iconColor, bgcolor: "white" }}>
                    {icon}
                </IconButton>
            </Card>
        );
    };

    return (
        <Grid container mt={2}>
            <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold">
                    Dashboard
                </Typography>
                <Typography variant="caption" color="gray">
                    School Management
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} mt={2}>
                    {/* Total Students */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            title="Total Students"
                            count="1234"
                            icon={<SchoolIcon />}
                            backgroundColor="#f9a858"
                            iconColor="#f9a858"
                        />
                    </Grid>

                    {/* Total Teachers */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            title="Total Teachers"
                            count="34"
                            icon={<GroupsIcon />}
                            backgroundColor="#18bbd5"
                            iconColor="#18bbd5"
                        />
                    </Grid>

                    {/* Total Parents */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            title="Total Parents"
                            count="521"
                            icon={<GroupIcon />}
                            backgroundColor="#6132f4"
                            iconColor="#6132f4"
                        />
                    </Grid>

                    {/* Total Revenue */}
                    <Grid item xs={12} sm={6} md={3}>
                        <InfoCard
                            title="Total Revenue"
                            count="$ 521"
                            icon={<CurrencyExchangeIcon />}
                            backgroundColor="#61e042"
                            iconColor="#61e042"
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                {/* <Grid container>
                    <Grid item xs={5}>
                        {" "}
                        <BarChart
                            xAxis={[
                                { scaleType: "band", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
                            ]}
                            series={[
                                { data: [1, 2, 3, 4, 5, 6] },
                                { data: [1, 2, 3, 4, 5, 6] },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: "Boys" },
                                        { id: 1, value: 15, label: "Girls" },
                                    ],
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    "StaticDatePicker",
                                ]}
                            >
                                <DemoItem label="Static variant">
                                    <StaticDatePicker defaultValue={dayjs("2025-01-09")} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid> */}
            </Grid>
        </Grid>
    );
};

export default Dashboard;
