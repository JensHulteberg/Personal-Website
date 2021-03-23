import React from "react";
import ProfessionalListItem from "./professionalComponents/ProfessionalListItem";
import ProfessionalTopbar from "./professionalComponents/ProfessionalTopbar";
import ProfessionalInfoCard from "./professionalComponents/ProfessionalInfoCard";
import TopPresentation from "./professionalComponents/TopPresentation";
import FeedCreator from "./FeedCreator";
import Profile from "./General/Profile";
import Projects from "./assets/Projects";
import BlogPost from "./Blog/blog_post";

import WaveLab from "./Projects/WaveLab";
import ThePep from "./Projects/ThePep";
import Lazarus from "./Projects/Lazarus";
import FluxWheel from "./Projects/FluxWheel";
import Luta from "./Projects/Luta";
import Alizea from "./Projects/Alizea";
import Tagluffaieuropa from "./Projects/Tagluffaieuropa";
import Kingz from "./Projects/kings";

import ProjectCardWrapper from "./Projects/ProjectCardWrapper";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Site extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: "profile",
		};
		this.changePage = this.changePage.bind(this);
	}

	changePage(pageName) {
		this.setState({ activePage: pageName });
	}

	render() {
		return (
			<div>
				<Router>
					<ProfessionalTopbar
						changePage={this.changePage}
						activePage={this.state.activePage}
					/>
					<div className="root">
						<main className="content">
							<Switch>
								<div>
									<Route exact path="/">
										<div>
											{" "}
											<TopPresentation text={"Projects"} /> <FeedCreator />{" "}
										</div>
									</Route>
									<Route path="/profile">
										<div>
											{" "}
											<TopPresentation text={"Profile"} /> <Profile />{" "}
										</div>
									</Route>
									<Route path="/blog">
										<div>
											{" "}
											<TopPresentation text={"Blog"} /> <BlogPost />{" "}
											<BlogPost />{" "}
										</div>
									</Route>
									<Route path={Projects[0].Link}>
										<ProjectCardWrapper
											index={0}
											leadingImg={require("./assets/Project pics/the_pep/front_detail.png")}
											pics={[
												{
													type: "img",
													source: require("./assets/Project pics/the_pep/man_with_phone_white.png"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/the_pep/infographic.png"),
												},
											]}
											externalLink={"http://www.seebeck.se"}
										/>
									</Route>
									<Route path={Projects[1].Link}>
										<ProjectCardWrapper
											index={1}
											leadingImg={require("./assets/Project pics/wave_lab/leading.png")}
											pics={[
												{
													type: "vid",
													source: require("./assets/Project pics/wave_lab/promoViddy.mp4"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/wave_lab/_MG_6295.jpg"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/wave_lab/DSC07978.jpg"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/wave_lab/experiment.jpg"),
												},
											]}
											externalLink={
												"http://www.idxpo.se/2019/WaveLabsWebsite/index.html"
											}
										/>
									</Route>
									<Route path={Projects[2].Link}>
										<ProjectCardWrapper
											index={2}
											leadingImg={require("./assets/Project pics/tagluffa/tagluffa_demo.png")}
											pics={[{ type: "img", source: null }]}
											externalLink={"http://www.tagluffaieuropa.se"}
										/>
									</Route>
									<Route path={Projects[3].Link}>
										<ProjectCardWrapper
											index={3}
											leadingImg={require("./assets/Project pics/the_lazarus_chair/leading.png")}
											pics={[
												{
													type: "img",
													source: require("./assets/Project pics/the_lazarus_chair/23.png"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/the_lazarus_chair/24.png"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/the_lazarus_chair/25.png"),
												},
											]}
										/>
									</Route>
									<Route path={Projects[4].Link}>
										<ProjectCardWrapper
											index={4}
											leadingImg={require("./assets/Project pics/flux_wheel/FluxRoom2.jpg")}
											pics={[
												{
													type: "vid",
													source: require("./assets/Project pics/flux_wheel/Opal.mp4"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/flux_wheel/fluxwheel.jpg"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/flux_wheel/infromationposter_rotated.png"),
												},
											]}
										/>
									</Route>
									<Route path={Projects[5].Link}>
										<ProjectCardWrapper
											index={5}
											leadingImg={require("./assets/Project pics/luta/luta.png")}
											pics={[
												{
													type: "img",
													source: require("./assets/Project pics/luta/detail.png"),
												},
											]}
										/>
									</Route>
									<Route path={Projects[6].Link}>
										<ProjectCardWrapper
											index={6}
											leadingImg={require("./assets/Project pics/alizea_housing/Rendering.jpg")}
											pics={[
												{
													type: "img",
													source: require("./assets/Project pics/alizea_housing/Huset.jpg"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/alizea_housing/Kokperspektiv3.jpg"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/alizea_housing/picutre.png"),
												},
											]}
										/>
									</Route>
									<Route path={Projects[7].Link}>
										<ProjectCardWrapper
											index={7}
											leadingImg={require("./assets/Project pics/kingz/leading.png")}
											pics={[
												{
													type: "img",
													source: require("./assets/Project pics/kingz/intro.PNG"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/kingz/play.PNG"),
												},
												{
													type: "img",
													source: require("./assets/Project pics/kingz/death.PNG"),
												},
											]}
										/>
									</Route>
								</div>
							</Switch>
						</main>
					</div>
				</Router>
			</div>
		);
	}
}

export default Site;
