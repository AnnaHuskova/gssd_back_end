import { District } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response } from "express";
import nodeFS from "fs/promises";
import nodePath from "path";
import { FeatureCollection, Feature } from 'geojson';

// const getDistrict = async (req, res) => {
//   const searchedDistrict = new RegExp(req.params.searchQuery, "gi");

//   const district = await District.find().or(
//     { "title.ua": { $regex: searchedDistrict } }
//   );

//   if (!district.length) {
//     throw createError(404, `District "${searchedDistrict}" not found`);
//   }

//   res.json({
//     status: "Success",
//     code: 200,
//     message: "District found",
//     data: {
//       district,
//     },
//   });
// };

async function getAllDistrictsJson(request: Request, response: Response): Promise<void> {
  const publicPath = nodePath.resolve("./public/Boroughs.json");
  try {
    const districts = await nodeFS.readFile(publicPath, {
      encoding: "utf-8",
    });
    const districtsArray = (JSON.parse(districts) as FeatureCollection).features;

    response.json({
      status: "Success",
      code: 200,
      message: "Districts retrieved",
      data: {
        districts: districtsArray,
      },
    })
  }
  catch (error) {
    console.error(error);
    return undefined;
  }
}

async function getAllDistricts(request: Request, response: Response): Promise<void> {
  const district:Feature[] = await District.find();
  if (!district.length) {
    throw createError(404, `No district shapes found`);
  }
  response.json({
    status: "Success",
    code: 200,
    message: "District shapes found",
    data: {
      district,
    },
  });
}

export {
  // getDistrict,
  getAllDistricts,
};