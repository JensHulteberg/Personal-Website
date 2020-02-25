import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PLACEHOLDERIMAGE from '../assets/imgplaceholder.jpg'
import slugman from '../assets/slugman_profile.png'

class ProjectCard extends React.Component {

    render() {
        if (this.props.orinetation == "right") {
            return (
                <div className="infoCardWraper" style={{paddingBottom: "0px"}}>
                    <div className="ProfessionalInfoCard">
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="stretch"
                        >
                            <Grid item xs={6}>
                                <img className="cardImg" src={slugman} />
                            </Grid>
                            <Grid item xs={6}>
                                <div className="cardTextWraper">
                                    <div className="cardText">
                                        <Typography>
                                            <Box fontWeight="fontWeightLight">
                                                <p>
                                                    This is a cool thing with WaveLabs. Wowowo!
                                                </p>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        } else {
            return (
                <div className="infoCardWraper" style={{paddingBottom: "0"}}>
                    <div className="ProfessionalInfoCard">
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="stretch"
                        >
                            <Grid item xs={6}>
                                <div className="cardTextWraper">
                                    <div className="cardTextRight">
                                        <Typography>
                                            <Box fontWeight="fontWeightLight">
                                                <p>
                                                    This is a cool thing with WaveLabs. Wowowo!
                                                </p>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </Box>
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <img className="cardImg" src={slugman} />
                            </Grid>

                        </Grid>
                    </div>
                </div>
            )
        }
    }
}

export default ProjectCard