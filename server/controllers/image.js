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

	return res.status(200).json(library);
};

export const getMovies = async (req, res) => {
	const data = await videolibrary.find()
	res.status(200).json(data)
}
