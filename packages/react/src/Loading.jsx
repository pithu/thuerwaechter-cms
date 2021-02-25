import {Box, Grid, Typography} from "@material-ui/core";
import React from "react";

const Loading = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Box textAlign="center">
                <Typography variant="h6">Loading ...</Typography>
            </Box>
        </Grid>
    </Grid>
);

export default Loading;
