import { Router } from "express";
const router = Router();

import logoutController from "../../controllers/Authentication/logout.controller";
router.get("/", logoutController.get);

export default router;