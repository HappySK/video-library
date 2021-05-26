import React from "react";
import { useStyles } from "./styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { TextError } from "./TextError";
import { LinearProgress } from "@material-ui/core";
import { uploadMovieData } from "../../actions/movie";
import { useDispatch } from "react-redux";

export const MovieForm = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const initialValues = {
		moviename: "",
		yearofrelease: "",
		language: "",
		ImageFile: null,
		VideoFile: null,
	};

	const onSubmit = (values) => {
		const data = new FormData();
		data.append("moviename", values.moviename);
		data.append("yearofrelease", values.yearofrelease);
		data.append("language", values.language);
		data.append("ImageFile", values.ImageFile);
		data.append("VideoFile", values.VideoFile);

		dispatch(uploadMovieData(data, history));
	};

	const IMAGE_FILE_SIZE = 500 * 1024;
	const VIDEO_FILE_SIZE = 10 * 1024 * 1024;
	const SUPPORTED_IMAGE_FORMATS = ["image/png", "image/jpeg", "image/jpg"];
	const SUPPORTED_VIDEO_FORMATS = ["video/mp4"];

	const validationSchema = Yup.object({
		moviename: Yup.string().required("Movie Name is required"),
		yearofrelease: Yup.string().required("Year of Release is required"),
		language: Yup.string().required("Language is required"),
		ImageFile: Yup.mixed()
			.required("Thumbnail File is required")
			.test(
				"Supported Formats",
				"Only Image files are accepted .jpg, .png",
				(image) =>
					image !== null && SUPPORTED_IMAGE_FORMATS.includes(image.type)
			)
			.test(
				"fileSize",
				"Image Should not exceed 500kb",
				(image) => image !== null && image.size <= IMAGE_FILE_SIZE
			),
		VideoFile: Yup.mixed()
			.required("Video is required")
			.test(
				"fileSize",
				"Video Should not exceed 10MB",
				(video) => video !== null && video.size <= VIDEO_FILE_SIZE
			)
			.test(
				"Supported Formats",
				"Video must be a .mp4 format",
				(video) =>
					video !== null && SUPPORTED_VIDEO_FORMATS.includes(video.type)
			),
	});

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{(formik) => {
					return (
						<>
							{formik.isSubmitting && <LinearProgress />}
							<Form className={classes.form} onSubmit={formik.handleSubmit}>
								<h1 className={classes.heading}>Movie Details Submission</h1>
								<div className={classes.formcontrol}>
									<label htmlFor="moviename" className={classes.label}>
										Movie Name
									</label>
									<Field
										type="text"
										className={classes.input}
										name="moviename"
										id="moviename"
									/>
									<ErrorMessage name="moviename" component={TextError} />
								</div>
								<div className={classes.formcontrol}>
									<label htmlFor="yearofrelease" className={classes.label}>
										Year Of Release
									</label>
									<Field
										type="text"
										className={classes.input}
										name="yearofrelease"
										id="yearofrelease"
									/>
									<ErrorMessage name="yearofrelease" component={TextError} />
								</div>
								<div className={classes.formcontrol}>
									<label htmlFor="language" className={classes.label}>
										Language
									</label>
									<Field
										type="text"
										className={classes.input}
										name="language"
										id="language"
									/>
									<ErrorMessage name="language" component={TextError} />
								</div>
								<div className={classes.formcontrol}>
									<label htmlFor="ImageFile" className={classes.label}>
										Thumbnail
									</label>
									<Field name="ImageFile">
										{({ field, form }) => {
											return (
												<input
													type="file"
													name={field.name}
													id={field.name}
													className={classes.input}
													onChange={(e) => {
														form.setFieldValue(field.name, e.target.files[0]);
													}}
												/>
											);
										}}
									</Field>
									<ErrorMessage name="ImageFile" component={TextError} />
								</div>
								<div className={classes.formcontrol}>
									<label htmlFor="VideoFile" className={classes.label}>
										Video
									</label>
									<Field name="VideoFile">
										{({ field, form }) => {
											return (
												<input
													type="file"
													name={field.name}
													id={field.name}
													className={classes.input}
													onChange={(e) => {
														form.setFieldValue(field.name, e.target.files[0]);
													}}
												/>
											);
										}}
									</Field>
									<ErrorMessage name="VideoFile" component={TextError} />
								</div>
								<div className={classes.formcontrol}>
									<button type="submit" className={classes.button}>
										{formik.isSubmitting ? "Loading" : "Submit"}
									</button>
									<button type="reset" className={classes.button}>
										Reset
									</button>
								</div>
							</Form>
						</>
					);
				}}
			</Formik>
		</>
	);
};
