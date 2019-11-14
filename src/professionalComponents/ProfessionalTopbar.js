import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class ProfessionalTopbar extends React.Component {
    render() {
        return (
            <div className="Topbar">
                <AppBar position="fixed">
                    <Toolbar className="toolbar">
                        <Box fontWeight="fontWeightLight" m={1}>
                            Light
                            </Box>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default ProfessionalTopbar