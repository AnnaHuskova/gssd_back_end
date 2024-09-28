import { Schema, model } from "mongoose";
// const Joi = require("joi");

const districtSchema = new Schema({
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
  id: {
    type: String,
    unique: true,
  },  
});

const District = model("District", districtSchema, "districts");

export {
  District,
  /*joiUserParamsSchema*/
};
