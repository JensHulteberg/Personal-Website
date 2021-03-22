import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import flux_room from "../assets/Project pics/flux_wheel/FluxRoom2.jpg";
import flux_wheel from "../assets/Project pics/flux_wheel/fluxwheel.jpg";
import infographic from "../assets/Project pics/flux_wheel/infromationposter_rotated.png";
import video from "../assets/Project pics/flux_wheel/Opal.mp4";

class FluxWheel extends React.Component {
	render() {
		var index = 4;
		var waveLab = Projects[index];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text={"Project " + index} />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"TANGLIBLE DESIGN"}
					bread={
						"Opal is an IOT (internet of things) light controller that  uses simple tanglible interactions to modfiy lighting in a domestic enviorment. \n\n By spinning, flipping and shaking the token a user can select an active light, turn it on and change both color and intensity of the light source. All this without a single instruction and only one line of feedback, that is the light strip that mimics the active light source intensity and color. \n\n The FluxWheel contains a complex combintation of rotary-encoders and gyroscopes that facilitates the interactions and can thus be both spun and flipped without needing any kind of external sensor or base-station."
					}
					leadingImg={flux_room}
					pics={[
						{ type: "vid", source: video },
						{ type: "img", source: flux_wheel },
						{ type: "img", source: infographic },
					]}
					trailText={
						"Created as part of a course at Chalmers University of Technology together with: Simon Mare, Sten Rõngelep, Mike Shirnazar, Johannes Kjellberg"
					}
				/>
			</div>
		);
	}
}

export default FluxWheel;
