import axios from "axios";

const URL = "http://localhost:5000/movie";

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
		.post("http://localhost:5000/movie/upload", movie, config)
};
