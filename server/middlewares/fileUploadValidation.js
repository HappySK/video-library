import multer from "multer";

export const fileUploadValidation = (req, res, next) => {
	const storage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null,`./public`, true);
		},
	});

	const fileFilter = (req, file, cb) => {
		if (file.fieldname === "ImageFile") {
			if (file.mimetype == "image/jpeg" || file.mimetype == "image/png")
				cb(null, true);
			else
				cb(
					{ message: "Unsupported Format. Kindly Upload jpeg/png files" },
					false
				);
		} else if (file.fieldname === "VideoFile") {
			if (file.mimetype == "video/mp4") cb(null, true);
			else
				cb(
					{ message: "Unsupported Video Format. Kindly Upload in .mp4 format" },
					false
				);
		}
	};

	const upload = multer({
		storage: storage,
		fileFilter: fileFilter,
	}).fields([{ name: "ImageFile" }, { name: "VideoFile" }]);

	upload(req, res, (err) => {
		if (err) return res.status(400).json({ message: err.message });
		const imageMaxSize = 500 * 1024;
		const videoMaxSize = 10 * 1024 * 1024;
		const imageFile = req.files.ImageFile[0];
		const videoFile = req.files.VideoFile[0];
		if (imageFile.size > imageMaxSize)
			return res.status(400).json({
				message:
					"Image File Size too large. Kindly upload .jpg/.png file lesser than 500KB",
			});
		if (videoFile.size > videoMaxSize)
			return res.status(400).json({
				message:
					"Video File Size too large. Kindly upload .mp4 file lesser than 10MB",
			});
		else {
			next();
		}
	});
};
