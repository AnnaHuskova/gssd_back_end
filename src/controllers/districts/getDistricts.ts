import { District } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response } from "express";
import { Feature } from 'geojson';

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
  getAllDistricts,
};