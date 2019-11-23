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
            <div className="infoCardWraper">
                <div className="ProfessionalInfoCard">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="stretch"
                    >
                        <Grid item xs={6}>
                            <img className="cardImg" src={require("../../" + this.props.PicPath)} />
                        </Grid>
                        <Grid item xs={6}>
                            <div className="cardTextWraper">
                                <div className="cardText">
                                    <Typography>
                                        <Box fontWeight="fontWeightLight">
                                            <p>
                                                {this.props.Name}
                                            </p>
                                            <p>
                                                {this.props.Description}
                                            </p>
                                        </Box>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default ProfessionalInfoCard