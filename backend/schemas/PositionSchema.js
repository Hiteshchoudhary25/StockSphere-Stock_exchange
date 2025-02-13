import  {Schema}  from "mongoose";

const PositionSchema = new Schema({
    product:String,
    name:String,
    qty:Number,
    price:Number,
    net:String,
    day:String,
    isLoss:Boolean,
});

export default PositionSchema;