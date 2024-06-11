import { GreenArea } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response } from "express";
import nodeFS from "fs/promises";
import nodePath from "path";
import { FeatureCollection, Feature } from 'geojson';

async function getAllGreenAreasJson(request: Request, response: Response): Promise<void> {
  const publicPath = nodePath.resolve("./public/Green_Areas.json");
  try {
    const areas = await nodeFS.readFile(publicPath, {
      encoding: "utf-8",
    });
    const areasArray = (JSON.parse(areas) as FeatureCollection).features;

    response.json({
      status: "Success",
      code: 200,
      message: "Green areas retrieved",
      data: {
        districts: areasArray,
      },
    })
  }
  catch (error) {
    console.error(error);
    return undefined;
  }
}

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