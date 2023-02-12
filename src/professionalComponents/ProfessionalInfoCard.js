import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "react-router-dom/Link";
import Fade from "@material-ui/core/Fade";

class ProfessionalInfoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mouse_over: false, pic_loaded: false };
	}

	handlePicLoaded() {
		this.setState({ pic_loaded: true });
	}

	render() {
		return (
			<div className="infoCardWraper">
				<Fade in={this.state.pic_loaded} timeout={500}>
					<Link className="link" to={this.props.Link}>
						<div
							className="ProfessionalInfoCard hoverable"
							onMouseEnter={() => this.setState({ mouse_over: true })}
							onMouseLeave={() => this.setState({ mouse_over: false })}
						>
							<Typography
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									textAlign: "center"
								}}
							>
								<Box fontWeight="fontWeightLight">
									{this.state.mouse_over ? this.props.Name : ""}
								</Box>
							</Typography>
							<img
								className="cardImg fadeable"
								src={require("../../" + this.props.PicPath)}
								onLoad={() => this.handlePicLoaded()}
							/>
						</div>
					</Link>
				</Fade>
			</div>
		);
	}
}

export default ProfessionalInfoCard;
