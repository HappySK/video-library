import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MovieForm } from "./Components/Form/Form";
import { Videos } from "./Components/Videos/Videos";
import { getMovies } from "./actions/movie";

const App = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<Router>
				<Grid container spacing={3} justify="center" alignItems="center">
					<Grid item xs={12} md={12} lg={12}>
						<Route exact path="/" component={MovieForm} />
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<Route exact path="/viewmovies" component={Videos} />
					</Grid>
				</Grid>
			</Router>
		</div>
	);
};

export default App;
