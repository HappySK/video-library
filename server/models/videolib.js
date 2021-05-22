import mongoose from "mongoose";

const videolib = new mongoose.Schema({
	moviename: String,
	yearofrelease: String,
	language: String,
	thumbnailLink: String,
	videoLink: String,
});

export default mongoose.model("video_library", videolib);
