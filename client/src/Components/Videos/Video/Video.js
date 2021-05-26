import React from "react";

import { useStyles } from "./styles";
import ReactPlayer from "react-player";

export const Video = ({ movie }) => {
	const classes = useStyles();
	const { moviename, yearofrelease, language, thumbnailLink, videoLink } =
		movie;

	return (
		<div className={classes.videos}>
			<ReactPlayer
				width={320}
				height={240}
				url={videoLink}
				controls
				light={thumbnailLink}
			/>
		</div>
	);
};
