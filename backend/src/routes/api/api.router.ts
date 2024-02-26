import { Router } from "express";
const router = Router();

import apiController from "../../controllers/api/api.controller";
router.post("/", apiController.post);
  
export default router;  