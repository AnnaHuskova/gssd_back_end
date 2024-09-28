import { Schema, model } from "mongoose";
// const Joi = require("joi");

const formSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    unique: true,
  },
  file: {
    type: Buffer,
    required: true,
  },  
});

const Form = model("Form", formSchema, "forms");

export {
  Form,
  /*joiUserParamsSchema*/
};