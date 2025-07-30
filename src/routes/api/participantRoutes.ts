import { Router } from "express";
import participantControllers from "../../controllers/participants";

const router = Router();
router.get("/", participantControllers.getAllParticipants);
export default router;