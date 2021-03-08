import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PLACEHOLDERIMAGE from "../assets/imgplaceholder.jpg";
import slugman from "../assets/slugman_profile.png";
import { Divider } from "@material-ui/core";

class ProjectCard extends React.Component {
	render() {
		return (
			<Grid container justify="center" alignItems="stretch" spacing={3}>
				<Grid container>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography variant="h5">
									<Box fontWeight="fontWeightLight">{""}</Box>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h5">
									<Box fontWeight="fontWeightLight">{this.props.title}</Box>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="body1">
									<Box fontWeight="fontWeightLight">{this.props.tags}</Box>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h5">
									<Box fontWeight="fontWeightLight">{""}</Box>
								</Typography>
							</Grid>
							<Box
								style={{
									borderTop: "#131313",
									borderTopStyle: "solid",
									borderTopWidth: "1px",
									width: "100%",
								}}
							></Box>
							<Grid item xs={12}>
								<Typography variant="h5">
									<Box fontWeight="fontWeightLight">{""}</Box>
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1">
									<Box fontWeight="fontWeightLight" className="breadText">
										{this.props.bread}
									</Box>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={1}></Grid>
				</Grid>
				{this.props.pics.map(function (element, index) {
					return (
						<Grid item xs={12}>
							<img className="cardImg" src={element} />
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default ProjectCard;
