import videolibrary from "../models/videolib.js";

export const imageUpload = async (req, res) => {
	const { moviename, yearofrelease, language } = req.body;
	const { thumbnailLink, videoLink } = req;

	const library = await new videolibrary({
		moviename,
		yearofrelease,
		language,
		thumbnailLink,
		videoLink,
	});

	library.save();

	return res.status(200).json({ message: "File Uploaded Successfully" });
};
