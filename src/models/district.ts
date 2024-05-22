import { Schema, model } from "mongoose";
// const Joi = require("joi");

const districtSchema = new Schema({
  type: {
    type: String,
    default: "Feature",
  },
  // properties: {
  //   type: Schema.Types.Mixed,
  //   // required: true,
  // },
  // geometry: {
  //   type: new Schema({
  //     type: {
  //       type: String,
  //       default: "Polygon",
  //       // required: true,
  //     },
  //     coordinates: {
  //       type: Array,
  //       // required: true,
  //     },
  //   }),
  //   // required: true,
  // },
  // title: new Schema({
  //   ru: { type: String, index: true },
  //   ua: { type: String, index: true },
  // }),
  // id: {
  //   type: String,
  //   // unique: true,
  // },  
});

// const joiUserParamsSchema = Joi.object({
//   height: Joi.string().required(),
//   age: Joi.string().required(),
//   currentWeight: Joi.string().required(),
//   desiredWeight: Joi.string().required(),
//   bloodType: Joi.string().required(),
// });

const District = model("District", districtSchema, "districts");

export {
  District,
  /*joiUserParamsSchema*/
};
