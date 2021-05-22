import express from "express";

import { imageUpload } from "../controllers/image.js";
import { fileUploadValidation } from "../middlewares/fileUploadValidation.js";
import { generatePublicURL } from "../middlewares/generatePublicURL.js";
import { driveUpload } from "../middlewares/driveUpload.js";

const router = express.Router();

router.post(
	"/upload",
	fileUploadValidation,
   driveUpload,
	generatePublicURL,
	imageUpload
);

export default router;
