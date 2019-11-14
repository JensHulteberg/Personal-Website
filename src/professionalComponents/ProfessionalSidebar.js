import React from 'react';
import Drawer from '@material-ui/core/Drawer';


class ProfessionalSidebar extends React.Component {

    render() {
        return (
            <Drawer
          className="sidebar"
          variant="permanent"
          anchor="top"
        >
        </Drawer>
        )
    }
}

export default ProfessionalSidebar