// import { Schema } from "mongoose";

// const HoldingSchema = new Schema({
//     name:String,
//     qty:Number,
//     avg:Number,
//     price:Number,
//     net:String,
//     day:String,
// });

// module.exports = HoldingSchema;

import { Schema } from "mongoose";

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean, // Added missing field
});

export default HoldingSchema;
