import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import MovieRoute from "./routes/movieRoute.mjs";
import dbInit from "./common/dbConnection.mjs"

const port = process.env.port || 4000
const app = express();

dbInit({mongoose})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',MovieRoute({express,app}));

app.listen(port, () => console.log(`Server Running on a port: ${port}`));
