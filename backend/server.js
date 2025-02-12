import express from "express";

import dotenv from "dotenv";
dotenv.config(); 

const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URL;

const app = express();

import connectToMongoose from "./db/connectToMongoose.js";

// connectToMongoose(dbUrl);



app.get("/", (req, res) => {
    res.send("Hello, world! hitesh");
});



app.listen(port ,() => {
    connectToMongoose();
    console.log(`Server is running on port ${port}`)
  });