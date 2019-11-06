import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import PLACEHOLDERIMAGE from '../assets/imgplaceholder.jpg'

class ProfessionalListItem extends React.Component {

    render() {
        return (
            <div
            className="professionalListItem"
            style={{backgroundImage: 'url(../logo.svg)'}}
            >
                <p className="title">
                    This is a placeholder item. Wow!
                </p>
                <p className="description">
                    Here i can put some more cool things about this placeholder!
                </p>
            </div>
        )
    }
}

export default ProfessionalListItem