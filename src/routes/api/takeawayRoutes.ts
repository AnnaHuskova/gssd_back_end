import express from "express";
import { ctrlWrapper, /*auth, joiValidation*/ } from "../../middlewares";
// const { joiUserParamsSchema } = require("../../models");
import { takeawayCtrl } from "../../controllers";

const router = express.Router();

router.get("/", ctrlWrapper(takeawayCtrl.getTakeaway));

export default router;