import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import total from "../assets/Project pics/the_lazarus_chair/22.png";
import helm from "../assets/Project pics/the_lazarus_chair/23.png";
import interaction from "../assets/Project pics/the_lazarus_chair/24.png";
import man_and_chair from "../assets/Project pics/the_lazarus_chair/25.png";

class TheLazarusChair extends React.Component {
	render() {
		var index = 3;
		var waveLab = Projects[index];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text={"Project " + index} />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"SPECUALTIVE DESIGN"}
					bread={
						"The Lazarus chair is a system that lets you remove your senses and leaves you alone with your own mind. The user puts on the helmet, sits down in the chair and by interacting with the controls get the power to turn on or off their own senses one by one. This will hopefully force the user to interact with their own mind as it is simply the only thing left to reflect on when the world is removed. \n\n The system has 4 buttons that disable one sense each. The buttons are located on the sphere at the end of one of the right arm-rests. The buttons are ranked in terms of “severity of the experience”: smell, then hearing, then sight and then touch. As touch is the last sense you lose it is also the one used to code the buttons. They are simply labeled with bumps for navigation without sight. The buttons work firstly as protective frame as they give the user full control over the experience [4]. But it is also important to have the agency of the system in the hands of the user. This way, the experience is owned by the user and thus hopefully a stronger one."
					}
					pics={[
						{ type: "img", source: total },
						{ type: "img", source: helm },
						{ type: "img", source: interaction },
						{ type: "img", source: man_and_chair },
					]}
				/>
			</div>
		);
	}
}

export default TheLazarusChair;
