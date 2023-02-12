import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import rendering from "../assets/Project pics/alizea_housing/Rendering.jpg";
import kitchen from "../assets/Project pics/alizea_housing/Kokperspektiv3.jpg";
import house from "../assets/Project pics/alizea_housing/Huset.jpg";
import function_render from "../assets/Project pics/alizea_housing/picutre.png";

class Alizea extends React.Component {
	render() {
		var index = 6;
		var waveLab = Projects[index];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text={"Project " + index} />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"INDUSTRIAL DESIGN"}
					bread={
						"The Alizea house redefines living by facilitating the possibility for homeowners to rent out a smaller compact living space on their own land. All aspects of the housing are designed with compact and effective living in mind creating a living experience that is grand on a smaller scale. \n\n The house was developed in collaboration with a housing company and was created with the users in mind focusing on their needs and desires. Thus the house is extremely flexible both internally and externally making space for a plethora of different functions and additions for greater personalisation."
					}
					leadingImg={rendering}
					pics={[
						{ type: "img", source: house },
						{ type: "img", source: kitchen },
						{ type: "img", source: function_render },
					]}
				/>
			</div>
		);
	}
}

export default Alizea;