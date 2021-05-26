import * as api from "../api/index";

export const getMovies = () => async (dispatch) => {
	try {
		const { data } = await api.getMoviesList();
		dispatch({ type: "GET_MOVIES", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const uploadMovieData = (movie, history) => async (dispatch) => {
	try {
		const { data } = await api.postMovieData(movie);
		dispatch({ type: "UPLOAD_MOVIE_DATA", payload: data });
		history.push("/viewmovies");
	} catch (error) {
		console.log(error);
	}
};
