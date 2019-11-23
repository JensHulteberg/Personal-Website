import React from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import profilePic from '../assets/slugman_profile.png'

class Profile extends React.Component {
    render() {
        return (
            <div className="infoCardWraper">
                <div className="profile">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Grid item xs={4}>
                            <img className="profilePic" src={profilePic} />
                        </Grid>
                        <Grid item xs={8}>
                            <div className="cardTextWraper">
                                <div className="cardText">
                                    <Typography>
                                        <Box fontWeight="fontWeightLight">
                                            <p>
                                                Hello and welcome to my personal homepage.
                            </p>
                                            <p>
                                                Im Jens Hulteberg, UX designer,  software designer and soon to be software engeneer. This site is supose to serve two purposes. Firstly as a portfolio of my more ofissial work, and secondly as an creative output for all kinds of junk i just want to get out there on the internet.
                            </p>
                                            <p>
                                                Feel free to check out my work and hope you find it cool/interesting!
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

export default Profile