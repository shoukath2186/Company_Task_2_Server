import express from "express";
import { TakeAllData } from "../Controller/userController.js";

const router = express.Router();


router.get("/getAllItems", TakeAllData);



export default router;