import React from 'react';

import ProjectCard from './ProjectCard'
import TopPresentation from '../professionalComponents/TopPresentation'


class WaveLab extends React.Component {

    render() {
        return (
            <div style={{paddingBottom: "16px"}}>
                <TopPresentation text="Wave Lab" />
                <ProjectCard orinetation="right" />
                <ProjectCard orinetation="left" />
            </div>
        )
    }
}

export default WaveLab