import { Schema, model } from "mongoose";
// const Joi = require("joi");

const greenAreaSchema = new Schema({
  type: {
    type: String,
    default: "Feature",
  },
  properties: {
    type: Schema.Types.Mixed,
    required: true,
  },
  geometry: {
    type: new Schema({
      type: {
        type: String,
        default: "Polygon",
        required: true,
      },
      coordinates: {
        type: Array,
        required: true,
      },
    }),
    required: true,
  },
});

// const joiUserParamsSchema = Joi.object({
//   height: Joi.string().required(),
//   age: Joi.string().required(),
//   currentWeight: Joi.string().required(),
//   desiredWeight: Joi.string().required(),
//   bloodType: Joi.string().required(),
// });

/**
 * name, schema, name of respective collection in MongoDB
 */
const GreenArea = model("GreenArea", greenAreaSchema, "green-areas");

export {
  GreenArea,
  /*joiUserParamsSchema*/
};
