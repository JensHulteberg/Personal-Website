import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import man_with_phone from "../assets/Project pics/the_pep/man_with_phone_white.png";
import infographic from "../assets/Project pics/the_pep/infographic.png";

class ThePep extends React.Component {
	render() {
		var waveLab = Projects[0];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text="Project 1" />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"SPECUALTIVE DESIGN"}
					bread={
						"The PEP-device is a complex wearable that harvests the user's body heat in order to generate a personal storage of electricity. The stored electricity can then be consumed as the users see fit: powering their personal devices, sharing it with others, or selling the electricity back to the power grid.\n\n The PEP is a speculative design existing in a potential future where electricity is scarse and society had pivoten towards other more novel ways of producing electricity. The aim of the product is to explore our relationship towards technology, the bond between human and phone and the stresses of extensive technology use today."
					}
					pics={[
						{ type: "img", source: man_with_phone },
						{ type: "img", source: infographic },
					]}
				/>
			</div>
		);
	}
}

export default ThePep;
