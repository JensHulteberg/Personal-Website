import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import leading from "../assets/Project pics/wave_lab/leading.png";
import whole_product from "../assets/Project pics/wave_lab/_MG_6295.jpg";
import hand_touch from "../assets/Project pics/wave_lab/DSC07978.jpg";
import sit_around from "../assets/Project pics/wave_lab/experiment.jpg";
import wave_lab_promo_vid from "../assets/Project pics/wave_lab/promoViddy.mp4";

class WaveLab extends React.Component {
	render() {
		var index = 1;
		var waveLab = Projects[index];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text={"Project " + index} />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"INTERACTIVE DESIGN"}
					bread={
						"Wave labs is a connected system of vibrating media designed to make you curious to ask the first question of how and why things vibrate. Through the common medium of sound the system vibrates not only the air around you but also a liquid and a solid object. Through hearing, touch and vision you can experience the effect of the soundwaves with these different medias. \n\n The Wave labs uses sound as the basis for learning. Thus it also uses a symbol for sound as a controller. By rotating a vinyl plate you can create all frequencies in the hearable spectrum. That same wavelength is then also applied to both a chladni plate and the water. This way a user gets direct feedback on how a wavelength interacts with different media. \n\n Our aim was from start to finish the creative learning experience one can have when exploring science. The system has no text or instructions just a vinyl plate that can be rotated to create the wave. People approach the sytem eager to explore the soundscape and its interaction with the different media. But they leave it with a bit more understanding of what waves are and how they interact."
					}
					leadingImg={leading}
					external_link={"http://www.idxpo.se/2019/WaveLabsWebsite/index.html"}
					pics={[
						{ type: "vid", source: wave_lab_promo_vid },
						{ type: "img", source: whole_product },
						{ type: "img", source: hand_touch },
						{ type: "img", source: sit_around },
					]}
					trailText={
						"\n Created as part of a course at Chalmers University of Technology. \n Teammates: Simon Mare, Sten Rõngelep, Mike Shirnazar, Johannes Kjellberg \n"
					}
				/>
			</div>
		);
	}
}

export default WaveLab;
