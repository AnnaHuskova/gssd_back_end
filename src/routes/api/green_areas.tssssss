import express from "express";
import { ctrlWrapper, /*auth, joiValidation*/ } from "../../middlewares";
// const { joiUserParamsSchema } = require("../../models");
import { greenAreasCtrl } from "../../controllers";

const router = express.Router();

// router.post(
//   "/",
//   joiValidation(joiUserParamsSchema),
//   ctrlWrapper(productsCtrl.getCaloriesAndNotAllowedProducts)
// );

router.get("/", ctrlWrapper(greenAreasCtrl.getAllGreenAreas));

export default router;