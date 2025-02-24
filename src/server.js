import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from 'cors';
import connection from "./Config/db.js";
import AdminRouter from "./Router/adminRouter.js";
import UserRouter from "./Router/userRouter.js";

app.use(
    cors({
      origin: process.env.CLINT_URL,
      methods: ['GET', 'POST', 'PUT', 'DELETE'], 
      credentials: true, 
    })
  );


dotenv.config()

connection()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/admin", AdminRouter);
app.use("/user",UserRouter);

const PORT = process.env.PORT || 3300;


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
}); 
