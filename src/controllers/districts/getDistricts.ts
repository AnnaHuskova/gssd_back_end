import { District } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response, NextFunction } from "express";
import nodeFS from "fs/promises";
import nodePath from "path";
import { FeatureCollection, Feature } from 'geojson';

/*
async function getAllDistrictsJson(request: Request, response: Response, next: NextFunction): Promise<void> {
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
*/

async function getAllDistricts(request: Request, response: Response, next: NextFunction): Promise<void> {
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