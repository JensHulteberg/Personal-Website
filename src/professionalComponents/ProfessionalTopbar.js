import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "react-router-dom/Link";

class ProfessionalTopbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Topbar">
				<AppBar position="fixed" elevation={0} color={"transparent"}>
					<Toolbar className="toolbar" variant="dense">
						<Grid justify="space-between" container>
							<Grid item>
								<Typography>
									<Box fontWeight="fontWeightLight">Jens Hulteberg</Box>
								</Typography>
							</Grid>
							<Grid item>
								<Box fontWeight="fontWeightLight">
									<Grid container spacing={1}>
										<Grid item>
											<Link className="link" to="/">
												<Typography
													className="topbarButton"
													style={
														window.location.pathname == "/"
															? { color: "#131313" }
															: { color: "#848484" }
													}
													m={1}
													onClick={() => this.props.changePage("portfolio")}
												>
													<Box fontWeight="fontWeightLight">Projects</Box>
												</Typography>
											</Link>
										</Grid>
										<Grid item>
											<Link className="link" to="/blog">
												<Typography
													className="topbarButton"
													style={
														window.location.pathname == "/blog"
															? { color: "#131313" }
															: { color: "#848484" }
													}
													onClick={() => this.props.changePage("blog")}
												>
													<Box fontWeight="fontWeightLight">Blog</Box>
												</Typography>
											</Link>
										</Grid>
										<Grid item>
											<Link className="link" to="/profile">
												<Typography
													className="topbarButton"
													style={
														window.location.pathname == "/profile"
															? { color: "#131313" }
															: { color: "#848484" }
													}
													onClick={() => this.props.changePage("profile")}
												>
													<Box fontWeight="fontWeightLight">Profile</Box>
												</Typography>
											</Link>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default ProfessionalTopbar;
