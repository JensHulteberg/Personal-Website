import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import profilePic from "../assets/slugman_profile.png";
import Fade from "@material-ui/core/Fade";

class Profile extends React.Component {
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
						direction="row"
						justify="center"
						alignItems="stretch"
						spacing={2}
					>
						<Grid item xs={12} sm={4}>
							<Fade in={this.state.pic_loaded} timeout={500}>
								<img
									className="profilePic"
									src={profilePic}
									onLoad={() => this.handlePicLoaded()}
								/>
							</Fade>
						</Grid>
						<Grid item xs={12} sm={8}>
							<div className="cardTextWraper">
								<div className="cardText">
									<Fade in={true} timeout={500}>
										<Typography>
											<Box fontWeight="fontWeightLight">
												<p>
													I am Jens Hulteberg, UX designer and software
													engineer. This is my personal site that works both as
													a showcase of my work and an creative outlet for
													things I make.
												</p>

												<p>Feel free to look around.</p>

												<p>If you want to contact me, do so.</p>
												<p>
													Email:{" "}
													<a href="mailto:jens.hulteberg@gmail.com">
														jens.hulteberg@gmail.com
													</a>
												</p>
											</Box>
										</Typography>
									</Fade>
								</div>
							</div>
						</Grid>
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
			</div>
		);
	}
}

export default Profile;
