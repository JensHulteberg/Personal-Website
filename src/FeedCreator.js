import React from "react";
import Projects from "./assets/Projects";
import ProjectCard from "./Projects/ProjectCard";
import { ENETUNREACH } from "constants";
import ProfessionalListItem from "./professionalComponents/ProfessionalListItem";
import ProfessionalInfoCard from "./professionalComponents/ProfessionalInfoCard";
import { Grid, Typography, Dialog, Box } from "@material-ui/core";
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
				<Grid container spacing={2} justify="center" alignItems="stretch">
					{Projects.map(function (element, index) {
						return (
							<Grid item xs={4} key={index}>
								<ProfessionalInfoCard
									Name={element.Name}
									Description={element.Description}
									PicPath={element.PicPath}
									Link={element.Link}
								/>
							</Grid>
						);
					})}
					<Grid item xs={12}>
						<Box
							style={{
								borderTop: "#131313",
								borderTopStyle: "solid",
								borderTopWidth: "1px",
								width: "100%",
							}}
						></Box>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default FeedCreator;
