import express from "express";
import { Request, Response } from "express";
import { ctrlWrapper, /*auth, joiValidation*/ } from "../../middlewares";
// const { joiUserParamsSchema } = require("../../models");

const router = express.Router();

async function healthCheck(request: Request, response: Response): Promise<void> {
  try {
    response.json({
      status: "Success",
      code: 200,
      message: "Backend working",
    } );
    console.log("Request to check backend - successful");
  }
  catch(error) {
    console.error(error);
  }
}

router.get("/", ctrlWrapper(healthCheck));

export default router;