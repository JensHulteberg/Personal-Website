import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
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

		var pics_loaded = [];
		this.props.pics.forEach((element) => {
			pics_loaded.push(false);
		});
		this.state = {
			current_pic_clicked: "",
			dialog_open: false,
			pics_loaded_status: pics_loaded,
		};
	}

	handlePicLoaded(index) {
		var list = this.state.pics_loaded_status;
		list[index] = true;
		this.setState({ pics_loaded_status: list });
		console.log(list);
	}

	handleClickOnPic(pic) {
		console.log("clicked pic");
		this.setState({ current_pic_clicked: pic, dialog_open: true });
	}

	render() {
		return (
			<Grid container justify="center" alignItems="stretch" spacing={1}>
				<Grid item xs={12}>
					<Fade in={true} timeout={500}>
						<Typography variant="h5">
							<Box fontWeight="fontWeightLight">{""}</Box>
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12}>
					<Fade in={true} timeout={500}>
						<Typography variant="h5">
							<Box fontWeight="fontWeightLight">{this.props.title}</Box>
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12}>
					<Fade in={true} timeout={500}>
						<Typography variant="body1">
							<Box fontWeight="fontWeightLight">{this.props.tags}</Box>
						</Typography>
					</Fade>
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
					<Fade in={true} timeout={500}>
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
					</Fade>
				</Grid>
				<Grid item xs={12}>
					{this.props.external_link ? (
						<Fade in={true} timeout={500}>
							<Typography variant="body1">
								<Box fontWeight="fontWeightLight" className="breadText">
									<a href={this.props.external_link} target="_blank">
										External site
									</a>
								</Box>
							</Typography>
						</Fade>
					) : (
						<div></div>
					)}
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
					fullWidth={false}
					maxWidth={"lg"}
					open={this.state.dialog_open}
					aria-labelledby="form-dialog-title"
					onClose={() => this.setState({ dialog_open: false })}
					style={{ borderRadius: "0" }}
				>
					<DialogContent style={{ borderRadius: "0" }}>
						<img className="cardImg" src={this.state.current_pic_clicked} />
					</DialogContent>
				</Dialog>
				{this.props.pics.map((element, index) => {
					var output;
					if (element.type == "img") {
						output = (
							<Fade in={this.state.pics_loaded_status[index]} timeout={500}>
								<Grid
									item
									xs={12}
									onClick={() => this.handleClickOnPic(element.source)}
								>
									<img
										onLoad={() => this.handlePicLoaded(index)}
										className="cardImg"
										src={element.source}
									/>
								</Grid>
							</Fade>
						);
					} else if (element.type == "vid") {
						output = (
							<Fade in={true} timeout={500}>
								<Grid item xs={12}>
									<Player playsInline src={element.source} />
								</Grid>
							</Fade>
						);
					}
					return output;
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
		);
	}
}

export default ProjectCard;
