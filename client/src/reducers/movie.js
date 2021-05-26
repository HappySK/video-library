export const moviereducer = (movies = [], action) => {
	switch (action.type) {
		case "GET_MOVIES":
			return action.payload;
		case "UPLOAD_MOVIE_DATA":
			return [...movies, action.payload];
		default:
			return movies;
	}
};
