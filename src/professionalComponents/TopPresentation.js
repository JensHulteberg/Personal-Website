import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class TopPresentation extends React.Component {
    render() {
        return (
            <div className="infoCardWraper">
                <Typography>
                    <Box fontWeight="fontWeightLight">
                        <p className="infoText">
                            Hello! I am Jens Hulteberg, UX designer, software developer and nerd. This is a site for all kinds of things I do. This is the professional version so if you are looking to hire me please do check out my work bellow.
                        </p>
                    </Box>
                </Typography>
            </div>
        )
    }
}

export default TopPresentation