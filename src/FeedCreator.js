import React from 'react';
import Projects from './assets/Projects'
import { ENETUNREACH } from 'constants';
import ProfessionalListItem from './professionalComponents/ProfessionalListItem'

class FeedCreator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {Projects.map(
                    function (element, index) {
                        return (
                        <div key={index}>
                            <ProfessionalListItem
                                Name={element.Name}
                                Description={element.Description}
                                PicPath={element.PicPath} />
                        </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default FeedCreator;