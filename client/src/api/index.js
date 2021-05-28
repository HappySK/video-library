import axios from "axios";

const URL = "https://app-video-library.herokuapp.com/movie";

export const getMoviesList = () => {
	return axios.get(`${URL}/getmovies`);
};

export const postMovieData = (movie) => {
	const config = {
		headers: {
			"Content-Type": "multipart/form-data;",
		},
	};
	return axios
		.post(`${URL}/upload`, movie, config)
};
