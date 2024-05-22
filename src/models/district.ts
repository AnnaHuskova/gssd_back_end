import { Schema, model } from "mongoose";
// const Joi = require("joi");

const districtSchema = undefined; /*Schema({
  categories: {
    type: Array,
  },
  weight: {
    type: Number,
  },
  title: Schema({
    ru: { type: String, index: true },
    ua: { type: String, index: true },
  }),
  calories: {
    type: Number,
  },
  groupBloodNotAllowed: {
    type: Array,
  },
});*/

// const joiUserParamsSchema = Joi.object({
//   height: Joi.string().required(),
//   age: Joi.string().required(),
//   currentWeight: Joi.string().required(),
//   desiredWeight: Joi.string().required(),
//   bloodType: Joi.string().required(),
// });

const District = model("districts", districtSchema);

export {
  District,
  /*joiUserParamsSchema*/
};
