import { Schema, model } from "mongoose";

const participantSchema = new Schema({
  type: {
    type: String,
    default: "Feature",
  },
  properties: {
    type: Schema.Types.Mixed, // Дозволяє зберігати будь-які поля, як у GeoJSON
    required: true,
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"], // Обмежує тип лише точкою
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const Participant = model("Participant", participantSchema, "participants");

export { Participant };

// import { Schema, model } from "mongoose";
// const participantSchema = new Schema({
//   type: {
//     type: String,
//     default: "Feature",
//   },
//   geometry: {
//     type: new Schema({
//       type: {
//         type: String,
//         default: "Point",
//         required: true,
//       },
//       coordinates: {
//         type: [Number],
//         required: true,
//       },
//     }),
//     required: true,
//   },
//   properties: {
//     category: { type: String },
//     city: { type: String },
//     description: { type: String },
//     fbLink: { type: String },
//     greenAreas: { type: String },
//     name: { type: String },
//     orgWeb: { type: String },
//     organization: { type: String },
//     otherLink: { type: String },
//     personalWeb: { type: String },
//     photoUrl: { type: String },
//     statement: { type: String },
//   },
// });

// const Participant = model("Participant", participantSchema, "participants");

// export {
//   Participant,
// };