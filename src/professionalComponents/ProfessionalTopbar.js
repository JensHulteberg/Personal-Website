import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class ProfessionalTopbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="Topbar">
                <AppBar position="fixed">
                    <Toolbar className="toolbar" variant="dense">
                        <Grid
                            justify="space-between"
                            container
                        >
                            <Grid item>
                                <Typography>
                                    <Box fontWeight="fontWeightLight">
                                        Jens Hulteberg
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Box fontWeight="fontWeightLight">
                                    <Grid container
                                        spacing={1}>
                                        <Grid item>
                                            <Typography className="topbarButton" m={1} onClick={console.log("Hello?")}>
                                                <Box fontWeight="fontWeightLight">
                                                    Profile
                                                </Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className="topbarButton">
                                                <Box fontWeight="fontWeightLight">
                                                    Contact
                                                </Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className="topbarButton">
                                                <Box fontWeight="fontWeightLight">
                                                    Blog
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}

export default ProfessionalTopbar