import express from "express";
import { Login,AddItem,UpdateItem,DeleteItem } from "../Controller/adminController.js";

const router = express.Router();

// Admin login route
router.post("/login", Login);
router.post('/addItem',AddItem)
router.put('/updateItem',UpdateItem);
router.delete('/deleteItem',DeleteItem)


export default router;
