import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";

import intro from "../assets/Project pics/kingz/intro.PNG";
import play from "../assets/Project pics/kingz/play.PNG";
import death from "../assets/Project pics/kingz/death.PNG";

class KingzOfWizards extends React.Component {
	render() {
		var index = 7;
		var waveLab = Projects[index];
		return (
			<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
				<TopPresentation text={"Project " + index} />
				<ProjectCard
					title={waveLab.Name}
					undertitle={waveLab.Description}
					tags={"GAME DEVELOPMENT"}
					bread={
						"It is Halloween, the year 19XX and the moon hangs low over a tiny village on the outskirts of Duskvale County. But this is no ordinary town. In this godforsaken place, two ancient wizards rise from the grave, on All Hallows' Eve, to duke it out in an all-out, fireball-fueled wizard battle. Caught in the crossfire of this ancient grudge are the villagers. These peaceful skeletons and humans, friends by day, are at night forced by the wizards into a terrible battle. \n\n In this two-player nightmare, take up arms as Malufix, the Wizard of Light, or his immortal enemy, the Dark Warlock Bulfass. Burn your enemies and be the lone winner when the sun's first rays break the dawn. Who will win and become The King of Wizards?"
					}
					external_link={"https://www.lexaloffle.com/bbs/?tid=32181"}
					pics={[
						{ type: "img", source: intro },
						{ type: "img", source: play },
						{ type: "img", source: death },
					]}
				/>
			</div>
		);
	}
}

export default KingzOfWizards;
