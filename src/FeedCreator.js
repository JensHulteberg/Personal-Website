import React from "react";
import Projects from "./assets/Projects";
import ProfessionalInfoCard from "./professionalComponents/ProfessionalInfoCard";
import { Grid, Box } from "@material-ui/core";

var match;

class FeedCreator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Grid container spacing={2} justify="flex-start" alignItems="stretch">
					{Projects.map(function (element, index) {
						return (
							<Grid item xs={12} sm={4} key={index}>
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
