import React from "react";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";
import { Box, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function ProjectCardWrapper(props) {
	let History = useHistory();

	function handleClickNext() {
		History.push(props.nextPath);
	}

	function handleClickPrev() {
		History.push(props.prevPath);
	}

	var index = props.index;
	return (
		<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
			<Grid container>
				<Grid item xs={2}>
					{!props.prevPath ? (
						<div></div>
					) : (
						<Link className="link" onClick={(event) => event.preventDefault()}>
							<Fade in={true} timeout={500}>
								<Typography
									variant="body1"
									className="topbarButton"
									style={{ color: "#131313" }}
								>
									<Box
										fontWeight="fontWeightLight"
										onClick={() => handleClickPrev()}
									>
										{"< Prev"}
									</Box>
								</Typography>
							</Fade>
						</Link>
					)}
				</Grid>
				<Grid item xs={8}></Grid>
				<Grid item xs={2}>
					{!props.nextPath ? (
						<div></div>
					) : (
						<Link className="link" onClick={(event) => event.preventDefault()}>
							<Fade in={true} timeout={500}>
								<Typography
									variant="body1"
									className="topbarButton"
									style={{ color: "#131313" }}
									align={"right"}
								>
									<Box
										fontWeight="fontWeightLight"
										onClick={() => handleClickNext()}
									>
										{"Next >"}
									</Box>
								</Typography>
							</Fade>
						</Link>
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
			</Grid>
			<ProjectCard
				title={props.name}
				undertitle={props.undertitle}
				tags={props.tags}
				bread={props.bread}
				leadingImg={props.leadingImg}
				pics={props.pics}
				external_link={props.externalLink}
			/>
		</div>
	);
}

export default ProjectCardWrapper;
