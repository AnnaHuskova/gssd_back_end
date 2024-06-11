import { Request, Response } from "express";

function ctrlWrapper(ctrl: Function) {
  return async (req:Request, res:Response, next:Function) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;
