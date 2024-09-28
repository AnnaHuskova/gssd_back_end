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

/**
 * name, schema, name of respective collection in MongoDB
 */
const GreenArea = model("GreenArea", greenAreaSchema, "green-areas");

export {
  GreenArea,
  /*joiUserParamsSchema*/
};
