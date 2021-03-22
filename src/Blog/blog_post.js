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
				<div className="profile">
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
						spacing={2}
					>
						<Grid item xs={4}>
							<Fade in={this.state.pic_loaded} timeout={500}>
								<img
									className="profilePic"
									src={slugman}
									onLoad={() => this.handlePicLoaded()}
								/>
							</Fade>
						</Grid>
						<Grid item xs={8}>
							<div className="cardTextWraper">
								<div className="cardText">
									<Fade in={true} timeout={500}>
										<Typography>
											<Box fontWeight="fontWeightLight">
												<p>This is a blob post title!</p>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Ut enim ad minim veniam, quis
													nostrud exercitation ullamco laboris nisi ut aliquip
													ex ea commodo consequat. Duis aute irure dolor in
													reprehenderit in voluptate velit esse cillum dolore eu
													fugiat nulla pariatur. Excepteur sint occaecat
													cupidatat non proident, sunt in culpa qui officia
													deserunt mollit anim id est laborum.
												</p>
											</Box>
										</Typography>
									</Fade>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default blog_post;
