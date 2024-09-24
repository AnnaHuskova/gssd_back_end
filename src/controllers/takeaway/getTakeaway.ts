import { Form } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response } from "express";
import nodeFS from "fs/promises";
import fs from "fs";
import nodeStream from "stream/promises";
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
  // const formItem: FormItem|null = await Form.findOne({city: city, type: type});

  const publicPath = nodePath.resolve("./public/takeaway");

  let formItem: FormItem|null = null;

  try {
    // const form = await nodeFS.readFile(`${publicPath}/${city}/${type}.jpg`, {
    //   encoding: null,
    // });
    const hasAccess = await nodeFS.access(`${publicPath}/${city}/${type}`); //test file for access
    const fileStream = fs.createReadStream(`${publicPath}/${city}/${type}`);
    //const form = fileStream. //nodeStream.pipeline. .createReadStream('./big.file')

    formItem = {
      city,
      type,
      file: fileStream,
    }
  }
  catch(error) {
    formItem = null;
  }

  // formItem = await Form.findOne({city: city, type: type});
  if (formItem === null) {
    throw createError(404, `No form for city ${city} with type ${type} found`);
  }
  response.setHeader('Content-Type', 'application/pdf'); //image/jpeg
  response.setHeader('Content-Disposition', `attachment; filename=${type}`);

  // Decode the BSON data into a Buffer object
  //const buffer = formItem.file//.toString("base64");
  // Set the Content-Length header
  //response.setHeader('Content-Length', buffer.length.toString());


  
  // Write the file data to the response's 'write' method
  //response.write(buffer);
  formItem.file.pipe(response);

    // Send the response to the client
    // response.end();
  // } catch (err) {
  //   response.status(500).end();
  // }

  // response.json({
  //   status: "Success",
  //   code: 200,
  //   message: "Form found",
  //   data: {
  //     formItem,
  //   },
  // });
}

export {
  getTakeaway,
};