import drive from "./driveConfig.js";

export const generatePublicURL = async (req, res, next) => {
	try {
		await drive.permissions.create({
			fileId: req.imageFileId,
			requestBody: {
				role: "reader",
				type: "anyone",
			},
		});

		const response = await drive.files.get({
			fileId: req.imageFileId,
			fields: "webViewLink, webContentLink",
		});

		req.thumbnailLink = response.data.webContentLink;
	} catch (error) {
		return res.status(401).json({ message: error.message });
	}

	try {
		await drive.permissions.create({
			fileId: req.videoFileId,
			requestBody: {
				role: "reader",
				type: "anyone",
			},
		});

		const response = await drive.files.get({
			fileId: req.videoFileId,
			fields: "webViewLink, webContentLink",
		});
		req.videoLink = response.data.webContentLink;
	} catch (error) {
		return res.status(401).json({ message: error.message });
	}

	next();
};
