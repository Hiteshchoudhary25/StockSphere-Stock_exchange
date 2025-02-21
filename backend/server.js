import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";


import connectToMongoose from "./db/connectToMongoose.js";
import HoldingModel from "./models/HoldingModel.js";
import PositionModel from "./models/PositionModel.js";

dotenv.config();


const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to database before starting the server
connectToMongoose();

// app.get("/addHoldings", async (req, res) => {
//     let tempHoldings = [
//         { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//         { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//         { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//         { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//         { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
//         { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//         { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
//         { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//         { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
//         { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
//         { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//         { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
//         { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//     ];

//     try {
//         await HoldingModel.insertMany(tempHoldings);
//         res.send("Holdings added successfully!");
//     } catch (error) {
//         console.error("Error adding holdings:", error);
//         res.status(500).send("Error adding holdings.");
//     }
// });

// app.get("/addPositions" , async(req,res) => {
//     let tempPositions = [{
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       }];

//       try {
//         await PositionModel.insertMany(tempPositions);
//         res.send("Positions added successfully!");
//       } catch (error) {
//         console.error("Error adding positions:", error);
//         res.status(500).send("Error adding positions.");
//       }
// })

app.get("/allHoldings" , async(req, res) => {
    try {
        const holdings = await HoldingModel.find();
        res.json(holdings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).send("Error fetching holdings.");
    }
});

app.get("/allPositions" , async(req, res) => {
    try {
        const positions = await PositionModel.find();
        res.json(positions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        res.status(500).send("Error fetching positions.");
    }
});


app.get("/", (req, res) => {
    res.send("Hello, world! Hitesh");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
