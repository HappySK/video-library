import fs from "fs";

import drive from "./driveConfig.js";

export const driveUpload = async (req, res, next) => {
	try {
		const response = await drive.files.create({
			requestBody: {
				name: req.files.ImageFile[0].originalname,
				mimeType: req.files.ImageFile[0].mimetype,
			},
			media: {
				mimeType: req.files.ImageFile[0].mimetype,
				body: fs.createReadStream(req.files.ImageFile[0].path),
			},
		});
		req.imageFileId = response.data.id;
	} catch (error) {
		return res.status(401).json(error.message);
	} finally {
		fs.unlinkSync(`./public/${req.files.ImageFile[0].filename}`);
		console.log("Image Deleted");
	}

	try {
		const response = await drive.files.create({
			requestBody: {
				name: req.files.VideoFile[0].originalname,
				mimeType: req.files.VideoFile[0].mimetype,
			},
			media: {
				mimeType: req.files.VideoFile[0].mimetype,
				body: fs.createReadStream(req.files.VideoFile[0].path),
			},
		});
		req.videoFileId = response.data.id;
	} catch (error) {
		return res.status(401).json(error.message);
	} finally {
		fs.unlinkSync(`./public/${req.files.VideoFile[0].filename}`);
		console.log("Video Deleted");
	}
	next();
};
