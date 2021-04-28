import React from "react";
import ProfessionalTopbar from "./professionalComponents/ProfessionalTopbar";
import TopPresentation from "./professionalComponents/TopPresentation";
import FeedCreator from "./FeedCreator";
import Profile from "./General/Profile";
import Projects from "./assets/Projects";
import Blog_generator from "./Blog/blog_generator";

import ProjectCardWrapper from "./Projects/ProjectCardWrapper";
import Grid from "@material-ui/core/Grid";

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
						<main>
							<Grid
								container
								direction="column"
								justify="center"
								alignItems="center"
								className="content"
							>
								<Grid item xs={10} sm={6}>
									<Switch>
										<Route exact path="/">
											<div>
												{" "}
												<TopPresentation
													text={"Projects"}
												/> <FeedCreator />{" "}
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
												<TopPresentation text={"Blog"} />
												<Blog_generator />
											</div>
										</Route>
										{Projects.map((project, index) => {
											return (
												<Route key={index} path={project.Link}>
													<ProjectCardWrapper
														index={index}
														name={project.Name}
														undertitle={project.Description}
														tags={project.tags}
														bread={project.bread}
														leadingImg={project.LeadingImg}
														pics={project.pics}
														externalLink={
															project.ExternalLink == ""
																? null
																: project.ExternalLink
														}
														ProjectLength={Projects.length}
														prevPath={
															index == 0 ? null : Projects[index - 1].Link
														}
														nextPath={
															index >= Projects.length - 1
																? null
																: Projects[index + 1].Link
														}
													/>
												</Route>
											);
										})}
									</Switch>
								</Grid>
							</Grid>
						</main>
					</div>
				</Router>
			</div>
		);
	}
}

export default Site;
