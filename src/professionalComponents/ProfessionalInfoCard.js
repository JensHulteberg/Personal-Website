import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PLACEHOLDERIMAGE from '../assets/imgplaceholder.jpg'
import slugman from '../assets/slugman_profile.png'

class ProfessionalInfoCard extends React.Component {

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <Grid item xs={6}>
                        <img className="cardImg" src={slugman} />
                    </Grid>
                    <Grid item xs={6}>
                        <div className="cardTextWraper">
                            <p className="cardText">
                                Testing this out!
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProfessionalInfoCard