import { Participant } from "../../models";
import { Request, Response } from "express";
import createError from "../../helpers/errors";
import { Feature } from "geojson";

async function getAllParticipants(request: Request, response: Response): Promise<void> {
  const participants: Feature[] = await Participant.find();
  if (!participants.length) {
    throw createError(404, "No participants found");
  }

  response.json({
    status: "Success",
    code: 200,
    message: "Participant shapes found",
    data: { participants },
  });
}

export { 
    getAllParticipants 
};

