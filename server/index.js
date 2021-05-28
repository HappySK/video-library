import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import imageRouter from "./routes/image.js";

dotenv.config();
const { DB_URL, PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movie", imageRouter);

app.get("/", (req, res) => {
	res.send("App Is Working");
});

app.set("useFindAndModify", true);
mongoose.connect(
	DB_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, res) => {
		if (err) console.log(err);
	}
);

app.listen(PORT, (err) => {
	if (err) console.log(err);
	else console.log(`Server connected on PORT:${PORT}`);
});
