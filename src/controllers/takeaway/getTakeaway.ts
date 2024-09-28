import createError from "../../helpers/errors";
import { Request, Response } from "express";
import nodeFS from "fs/promises";
import fs from "fs";
import nodePath from "path";

interface FormItem {
  city: string,
  type: string,
  file: fs.ReadStream,
}

async function getTakeaway(request: Request, response: Response): Promise<void> {
  const {city, type} = request.query as Record<string, string>;
  if(city === undefined || type === undefined) {
    throw createError(400, "Missing request parameters");
    //needs get with type of PDF and city as req.params
  }

  const publicPath = nodePath.resolve("./public/takeaway");

  let formItem: FormItem|null = null;

  try {
    const hasAccess = await nodeFS.access(`${publicPath}/${city}/${type}`); //test file for access. If the file does not exists, throws an error
    const fileStream = fs.createReadStream(`${publicPath}/${city}/${type}`);

    formItem = {
      city,
      type,
      file: fileStream,
    }
  }
  catch(error) {
    console.log((error as Error).message);
    formItem = null;
  }

  if (formItem === null) {
    throw createError(404, `No form for city ${city} with type ${type} found`);
  }
  response.setHeader('Content-Type', 'application/pdf'); //image/jpeg
  response.setHeader('Content-Disposition', `attachment; filename=${type}`);
  
  // Pipe the file data to the response
  formItem.file.pipe(response);
}

export {
  getTakeaway,
};