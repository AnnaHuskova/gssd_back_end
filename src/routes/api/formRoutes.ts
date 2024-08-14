import express from "express";
import { ctrlWrapper, /*auth, joiValidation*/ } from "../../middlewares";
// const { joiUserParamsSchema } = require("../../models");
import { formsCtrl } from "../../controllers";

const router = express.Router();

// router.post(
//   "/",
//   joiValidation(joiUserParamsSchema),
//   ctrlWrapper(productsCtrl.getCaloriesAndNotAllowedProducts)
// );

router.get("/", ctrlWrapper(formsCtrl.getForm));

export default router;