import React from "react";
import Projects from "./../assets/Projects";
import ProjectCard from "./ProjectCard";
import TopPresentation from "../professionalComponents/TopPresentation";
import Grid from "@material-ui/core/Grid";
import { Box, Typography, Fade } from "@material-ui/core";
import Link from "react-router-dom/Link";
import { useHistory } from "react-router";

function ProjectCardWrapper(props) {
	let History = useHistory();

	function handleClickNext() {
		History.push(Projects[props.index + 1].Link);
	}

	function handleClickPrev() {
		History.push(Projects[props.index - 1].Link);
	}

	var index = props.index;
	var project = Projects[index];
	return (
		<div style={{ paddingBottom: "16px", overflow: "hidden" }}>
			<Grid container>
				<Grid item xs={2}>
					{props.index == 0 ? (
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
					{props.index >= Projects.length - 1 ? (
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
				title={project.Name}
				undertitle={project.Description}
				tags={project.tags}
				bread={project.bread}
				leadingImg={props.leadingImg}
				pics={props.pics}
				external_link={props.externalLink}
			/>
		</div>
	);
}

export default ProjectCardWrapper;
