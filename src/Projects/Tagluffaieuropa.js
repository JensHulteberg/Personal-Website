import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import demo from "../assets/Project pics/tagluffa/tagluffa_demo.png";

class Tagluffaieuropa extends React.Component {
	render() {
		var index = 2;
		var waveLab = Projects[index];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text={"Project " + index} />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"WEB DESIGN / DEVELOPMENT"}
					bread={
						"Tagluffaieuropa.se is a travel guide website both designed, developed, and maintained by me and a college. The goal of the website is to provide informational and trustworthy guidance to help travellers make informed decisions and plan their vacations in advance. The site also works as a web shop, where it is possible to book and buy interrail tickets for a future vacation. Tågluffaieuropa.se is made with React and JavaScript and uses a MySQL-database to store relevant information. \n\n Tagluffaieuropa.se is an active project and the site is still in development. The current build can be found through the external link provided bellow."
					}
					external_link={"http://www.tagluffaieuropa.se"}
					leadingImg={demo}
					pics={[{ type: "img", source: null }]}
				/>
			</div>
		);
	}
}

export default Tagluffaieuropa;
