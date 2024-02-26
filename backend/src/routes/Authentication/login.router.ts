import { Router } from "express";
const router = Router();

import loginController from "../../controllers/Authentication/login.controller";
router.get("/", loginController.get);

export default router;