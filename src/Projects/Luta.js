import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import luta from "../assets/Project pics/luta/luta.png";
import detail from "../assets/Project pics/luta/detail.png";

class Luta extends React.Component {
	render() {
		var waveLab = Projects[4];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text="Project 1" />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"INDUSTRIAL DESIGN"}
					bread={
						"Luta is an ergonomic workspace for industrial soldering workers made to be as ergonomic as possible. It utilizes a plethora of functions to create a working environment that is both safe and healthy and prevent fatigue injury during long work days. \n\n Made with the users in mind the design of Luta is based on a substantial battery of data gathered through an extensive user study on industrial workers."
					}
					pics={[
						{ type: "img", source: luta },
						{ type: "img", source: detail },
					]}
				/>
			</div>
		);
	}
}

export default Luta;
