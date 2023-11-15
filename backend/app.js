import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json())
app.use("/api/user",router);
mongoose.connect("mongodb+srv://"+ process.env.NAME + ":" + process.env.PASSWORD +"@cluster0.pnkzzlm.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log("Connected and listening at 5000."))
.catch((err)=>console.log(err));
