import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6">Metrics 1</Typography>
            <Typography variant="h5">42</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6">Metrics 2</Typography>
            <Typography variant="h5">56</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6">Metrics 3</Typography>
            <Typography variant="h5">78</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
