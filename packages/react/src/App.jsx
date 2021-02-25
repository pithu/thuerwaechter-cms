import React from 'react';
import {Grid} from "@material-ui/core";
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import HomePage from "./HomePage";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const App = () => {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeightRegular: 400,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        },});

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <HomePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
