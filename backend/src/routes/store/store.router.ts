import { Router } from "express";
const router = Router();

import storeController from "../../controllers/store/store.controller";
router.get("/", storeController.get)
router.post("/create", storeController.create)

export default router;      