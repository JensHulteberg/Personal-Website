import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PLACEHOLDERIMAGE from "../assets/imgplaceholder.jpg";
import slugman from "../assets/slugman_profile.png";
import Link from "react-router-dom/Link";
import { useState } from "react";

class ProfessionalInfoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mouse_over: false };
	}

	render() {
		return (
			<div className="infoCardWraper">
				<Link className="link" to={this.props.Link}>
					<div
						className="ProfessionalInfoCard shadowed hoverable"
						onMouseEnter={() => this.setState({ mouse_over: true })}
						onMouseLeave={() => this.setState({ mouse_over: false })}
					>
						<Typography
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
							}}
						>
							<Box fontWeight="fontWeightLight">
								{this.state.mouse_over ? this.props.Name : ""}
							</Box>
						</Typography>
						<img
							className="cardImg fadeable"
							src={require("../../" + this.props.PicPath)}
						/>
					</div>
				</Link>
			</div>
		);
	}
}

export default ProfessionalInfoCard;
