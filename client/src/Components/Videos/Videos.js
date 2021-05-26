import React, { useEffect, useMemo } from "react";
import { useStyles } from "../Videos/styles";
import {
	Grid,
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	Typography,
	TableContainer,
	Paper,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movie";
import { useTable, usePagination } from "react-table";

import { Video } from "./Video/Video";

export const Videos = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	const COLUMNS = [
		{
			Header: "Movie Name",
			accessor: "moviename",
		},
		{
			Header: "Year Of Release",
			accessor: "yearofrelease",
		},
		{
			Header: "Language",
			accessor: "language",
		},
		{
			Header: "Thumbnail",
			accessor: "thumbnailLink",
			Cell: ({ row }) => (
				<img
					src={row.original.thumbnailLink}
					className={classes.image}
					width="300"
					height="240"
					alt="Thumbnail"
				/>
			),
		},
		{
			Header: "Video",
			accessor: "videoLink",
			Cell: ({ row }) => <Video movie={row.original} />,
		},
	];
	const movies = useSelector((state) => state.moviereducer);

	const columns = useMemo(() => COLUMNS, [movies]);
	const data = useMemo(() => movies, [movies]);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setPageSize,
	} = useTable(
		{
			data,
			columns,
		},
		usePagination
	);
	const { pageSize } = state;

	return (
		<>
			<TableContainer component={Paper}>
				<Typography variant="h4" className={classes.heading}>
					Movie Details
				</Typography>
				<Table {...getTableProps()}>
					<TableHead>
						{headerGroups.map((headerGroup) => (
							<TableRow {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<TableCell
										{...column.getHeaderProps()}
										className={classes.heading}
									>
										{column.render("Header")}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<TableRow {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<TableCell
												{...cell.getCellProps()}
												className={classes.cell}
											>
												{cell.render("Cell")}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			{`No Of Records per page `}
			<select
				value={pageSize}
				onChange={(e) => {
					setPageSize(e.target.value);
				}}
			>
				{[10, 25, 50, 100].map((size) => (
					<option value={size}>{size}</option>
				))}
			</select>
		</>
	);
};
