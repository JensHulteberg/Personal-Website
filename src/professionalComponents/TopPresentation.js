import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class TopPresentation extends React.Component {
    render() {
        return (
            <div className="topTitle">
                <div className="topPresentation">
                    <Typography>
                        <Box fontWeight="fontWeightLight">
                            <div className="infoText">
                                {this.props.text}
                            </div>
                        </Box>
                    </Typography>
                </div>
            </div>
        )
    }
}

export default TopPresentation