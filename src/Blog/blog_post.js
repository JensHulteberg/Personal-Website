import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PLACEHOLDERIMAGE from "../assets/imgplaceholder.jpg";
import slugman from "../assets/slugman_profile.png";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";

class blog_post extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pic_loaded: false };
	}

	handlePicLoaded() {
		this.setState({ pic_loaded: true });
	}

	render() {
		return (
			<div className="infoCardWraper">
				<div>
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
						spacing={2}
					>
						<Grid item xs={12}>
							<Typography>
								<Box fontWeight="fontWeightLight">{this.props.date}</Box>
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Fade in={this.state.pic_loaded} timeout={500}>
								<img
									className="profilePic"
									src={this.props.pic}
									onLoad={() => this.handlePicLoaded()}
								/>
							</Fade>
						</Grid>
						<Grid item xs={12}>
							<Fade in={true} timeout={500}>
								<Typography>
									<Box fontWeight="fontWeightLight" className="breadText">
										{this.props.title + "\n\n"}
										{this.props.bread}
									</Box>
								</Typography>
							</Fade>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default blog_post;
