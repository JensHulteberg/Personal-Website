import React from 'react';
import PLACEHOLDERIMAGE from '../assets/imgplaceholder.jpg'

class ProfessionalListItem extends React.Component {

    render() {
        return (
            <div
                className="listItem"
            >
                <img src={require("../../" + this.props.PicPath)} />
                <div className="text">
                    <p>
                        {this.props.Name}
                    </p>
                    <p>
                        {this.props.Description}
                    </p>
                </div>
            </div >
        )
    }
}

export default ProfessionalListItem