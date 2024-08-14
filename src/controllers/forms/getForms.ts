import { Form } from "../../models";
import createError from "../../helpers/errors";
import { Request, Response } from "express";
import nodeFS from "fs/promises";
import nodePath from "path";

interface FormItem {
  city: string,
  type: string,
  file: Buffer,
}

async function getForm(request: Request, response: Response): Promise<void> {
  const {city, type} = request.query as Record<string, string>;
  if(city === undefined || type === undefined) {
    throw createError(400, "Missing request parameters");
    //needs get with type of PDF and city as req.params
  }
  // const formItem: FormItem|null = await Form.findOne({city: city, type: type});

  const publicPath = nodePath.resolve("./public/forms");

  let formItem: FormItem|null = null;

  try {
    const form = await nodeFS.readFile(`${publicPath}/${city}/${type}.pdf`, {
      encoding: "utf-8",
    });

    formItem = {
      city,
      type,
      file: Buffer.from(form, "utf-8"),
    }
  }
  catch(error) {
    formItem = null;
  }

  // formItem = await Form.findOne({city: city, type: type});
  if (formItem === null) {
    throw createError(404, `No form for city ${city} with type ${type} found`);
  }
  response.json({
    status: "Success",
    code: 200,
    message: "Form found",
    data: {
      formItem,
    },
  });
}

export {
  getForm,
};