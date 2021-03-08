import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import fluxwheel from "../assets/fluxwheel.jpg"
import luta from "../assets/luta.png"

class WaveLab extends React.Component {
	render() {
		var waveLab = Projects[1];
		return (
			<div style={{ paddingBottom: "16px" }}>
				<TopPresentation text="Project 1" />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"INTERACTIVE DESIGN"}
					bread={
						"Wave labs is a connected system of vibrating media designed to make you curious to ask the first question of how and why things vibrate. Through the common medium of sound the system vibrates not only the air around you but also a liquid and a solid object. Through hearing, touch and vision you can experience the effect of the soundwaves with these different medias. \n\n The Wave labs uses sound as the basis for learning. Thus it also uses a symbol for sound as a controller. By rotating a vinyl plate you can create all frequencies in the hearable spectrum. That same wavelength is then also applied to both a chladni plate and the water. This way a user gets direct feedback on how a wavelength interacts with different media. \n\n Wave Labs was developed during a course at Chalmers University of Technology under the abigious theme “visualizing the invisible”. Our aim was from start to finish the creative learning experience one can have when exploring science. The system has no text or instructions just a vinyl plate that can be rotated to create the wave. People approach the sytem eager to explore the soundscape and its interaction with the different media. But they leave it with a bit more understanding of what waves are and how they interact."

					}
                    pics={[fluxwheel, luta]}
				/>
			</div>
		);
	}
}

export default WaveLab;
