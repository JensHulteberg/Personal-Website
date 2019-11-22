import React from 'react';
import Projects from './assets/Projects'
import { ENETUNREACH } from 'constants';
import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'

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
                            <ProfessionalInfoCard
                                key={index}
                                Name={element.Name}
                                Description={element.Description}
                                PicPath={element.PicPath} />
                        )
                    }
                )}
            </div>
        )
    }
}

export default FeedCreator;