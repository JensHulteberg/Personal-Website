import React from "react";
import blog_posts from "../assets/blog_posts";
import Blog_post from "./blog_post";
import { Grid, Typography, Dialog, Box, Container } from "@material-ui/core";

function BlogGenerator(props) {
	return (
		<Grid container spacing={2}>
			{blog_posts.map(function (element, index) {
				return (
					<Grid item xs={12} key={index}>
						<Blog_post
							title={element.Title}
							date={element.Date}
							pic={require("../" + element.PicPath)}
							bread={element.bread}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default BlogGenerator;
