import { Router } from "express";
const router = Router();

import licenseController from "../../controllers/Licenses/license.controller";
router.get("/", licenseController.get);
router.post("/submit", licenseController.submit)

export default router;    