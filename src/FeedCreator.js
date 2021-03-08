import React from "react";
import Projects from "./assets/Projects";
import ProjectCard from "./Projects/ProjectCard";
import { ENETUNREACH } from "constants";
import ProfessionalListItem from "./professionalComponents/ProfessionalListItem";
import ProfessionalInfoCard from "./professionalComponents/ProfessionalInfoCard";
import { Grid, Typography, Dialog } from "@material-ui/core";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
} from "react-router-dom";

var match;

class FeedCreator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Grid container spacing={1} justify="center" alignItems="stretch">
					{Projects.map(function (element, index) {
						return (
							<Grid item xs={4}>
								<ProfessionalInfoCard
									key={index}
									Name={element.Name}
									Description={element.Description}
									PicPath={element.PicPath}
									Link={element.Link}
								/>
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	}
}

export default FeedCreator;
