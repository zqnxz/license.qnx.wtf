import { Router } from "express";
const router = Router();
import rateLimit from "../../middlewares/rateLimiter"

import apiController from "../../controllers/api/api.controller";
router.post("/", [rateLimit], apiController.post);
  
export default router;    