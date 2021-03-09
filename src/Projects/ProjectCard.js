import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PLACEHOLDERIMAGE from "../assets/imgplaceholder.jpg";
import slugman from "../assets/slugman_profile.png";
import {
	Divider,
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { current_pic_clicked: "", dialog_open: false };
	}

	handleClickOnPic(pic) {
		console.log("clicked pic");
		this.setState({ current_pic_clicked: pic, dialog_open: true });
	}

	render() {
		return (
			<Grid container justify="center" alignItems="stretch" spacing={1}>
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
				<Box
					style={{
						borderTop: "#131313",
						borderTopStyle: "solid",
						borderTopWidth: "1px",
						width: "100%",
					}}
				></Box>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item>
									<Typography variant="body1">
										<Box fontWeight="fontWeightLight" className="breadText">
											{this.props.bread}
										</Box>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Box
					style={{
						borderTop: "#131313",
						borderTopStyle: "solid",
						borderTopWidth: "1px",
						width: "100%",
					}}
				></Box>
				<Dialog
					open={this.state.dialog_open}
					aria-labelledby="form-dialog-title"
					onClose={() => this.setState({ dialog_open: false })}
				>
					<DialogTitle
						id="customized-dialog-title"
						onClose={() => this.setState({ dialog_open: false })}
					>
						<IconButton
							aria-label="close"
							onClick={() => this.setState({ dialog_open: false })}
						>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					<DialogContent dividers>
						<img className="cardImg" src={this.state.current_pic_clicked} />
					</DialogContent>
				</Dialog>
				{this.props.pics.map((element, index) => {
					var output;
					if (element.type == "img") {
						output = (
							<Grid
								item
								xs={12}
								onClick={() => this.handleClickOnPic(element.source)}
							>
								<img
									className="cardImg"
									src={element.source}
								/>
							</Grid>
						);
					} else if (element.type == "vid") {
						output = (
							<Grid item xs={12}>
								<Player playsInline src={element.source} />
							</Grid>
						);
					}
					return output;
				})}
			</Grid>
		);
	}
}

export default ProjectCard;
