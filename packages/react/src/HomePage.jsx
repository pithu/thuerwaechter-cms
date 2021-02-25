import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography } from "@material-ui/core";
import Loading from "./Loading";
import { makeStyles } from "@material-ui/core/styles";

import { sanityApi } from "./sanityApi";
import { urlFor } from "./sanityClient";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'grey',
    },}));

const HomePage = () => {
    const classes = useStyles();
    const [cmsData, setCmsData] = useState(null);

    useEffect(() => {
        sanityApi.fetchAll(setCmsData);
    }, []);

    console.log('hello world', { cmsData });
    if (cmsData == null) {
        return (<Loading />);
    }

    return (
        <>
            <Grid container direction="row" justify="center" spacing={1}>
                <Grid item xs={3}>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <img src={urlFor(cmsData.header.header).width(499).url()} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <img src={urlFor(cmsData.header.logo).width(236).url()} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid container item xs={6} spacing={1}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} />
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>
                            <Typography align="left">
                                {cmsData.employee.title} {cmsData.employee.firstName} {cmsData.employee.lastName}
                            </Typography>
                        </Paper>
                    </Grid>
                    { cmsData.contact.address.map((address) => (
                        <React.Fragment key={address._key}>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <Typography align="right">{ address.kind }</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={9}>
                                <Paper className={classes.paper}>
                                    <Typography align="left">{ address.value }</Typography>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                        ))
                    }
                 </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} />
                </Grid>
            </Grid>
        </>
    );
}

export default HomePage
