import express from "express";
import { ctrlWrapper, /*auth, joiValidation*/ } from "../../middlewares";
// const { joiUserParamsSchema } = require("../../models");
import { districtsCtrl } from "../../controllers";
import { Operation } from "express-openapi";

export const parameters = [
  {
    in: 'path',
    name: 'id',
    required: true,
    type: 'integer'
  }
];


const GET: Operation = [
  /* business middleware not expressible by OpenAPI documentation goes here */
  //(req, res, next) => {
    ctrlWrapper(districtsCtrl.getAllDistricts),
      //res.status(200).json(/* return the user */);
  //}
];

GET.apiDoc = {
  description: 'Retrieve district borders for a city.',
  tags: ['district'],
  operationId: 'getAllDistricts',
  // parameters for this operation
  parameters: [
    // {
    //   in: 'query',
    //   name: 'City',
    //   required: true,
    //   type: 'string'
    // }
  ],
  responses: {
    200: {
      description: "District borderd for the requested city as an array of GeoJSON Features",
      schema: {
        type: "array",
        items: {
          $ref: "#/components/schemas/District",
          /*type: "array",
          items: {
            //$ref: '#/components/schemas/User'
            type: "string",
            properties: {
              type: "any",
            },*/
          }
      }
    },
    default: {
      description: "Error, probably"
    //   $ref: '#/components/schemas/Error'
    }
  }
};

let operations = {
  GET
}


const router = express.Router();

// router.post(
//   "/",
//   joiValidation(joiUserParamsSchema),
//   ctrlWrapper(productsCtrl.getCaloriesAndNotAllowedProducts)
// );

//Subroutes for API end point
//router.get("/", ctrlWrapper(districtsCtrl.getAllDistricts));

export default operations;