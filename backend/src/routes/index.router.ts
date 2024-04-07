import { Router } from "express";
const router = Router();

import indexController from "../controllers/index.controller";
import loginMiddleware from "../middlewares/Authentication/login.middleware";
router.get("/", [loginMiddleware], indexController.get);
//todo: implement custom loginMiddleware for this route /service/:store
// router.get("/service/:store", indexController.getStore)
router.post("/download/", [loginMiddleware], indexController.download)
router.post("/edit/:id", [loginMiddleware], indexController.edit)  
router.post("/delete/:id", [loginMiddleware], indexController.delete)
router.post("/editdone/:id", [loginMiddleware], indexController.editdone)

export default router;      