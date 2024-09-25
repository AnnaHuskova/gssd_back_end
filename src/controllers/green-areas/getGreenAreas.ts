import { GreenArea } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response } from "express";
import { Feature } from 'geojson';

async function getAllGreenAreas(request: Request, response: Response): Promise<void> {
  const area:Feature[] = await GreenArea.find();
  if (!area.length) {
    throw createError(404, `No green areas found`);
  }
  response.json({
    status: "Success",
    code: 200,
    message: "Green area shapes found",
    data: {
      area,
    },
  });
}

export {
  getAllGreenAreas,
};