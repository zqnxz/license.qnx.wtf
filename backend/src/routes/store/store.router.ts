import { Router } from "express";
const router = Router();

import storeController from "../../controllers/store/store.controller";
router.get("/create", storeController.get)
router.get("/:store", storeController.getStore)
router.post("/create", storeController.create)

export default router;      