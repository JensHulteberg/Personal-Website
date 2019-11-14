import React from 'react';
import PLACEHOLDERIMAGE from '../assets/imgplaceholder.jpg'

class ProfessionalListItem extends React.Component {

    render() {
        return (
            <div
                className="listItem"
            >
                <img src={PLACEHOLDERIMAGE}/>
                <div className="text">
                    <p>
                        Title
                    </p>
                    <p>
                        Describe!!!
                    </p>
                </div>
            </div >
        )
    }
}

export default ProfessionalListItem