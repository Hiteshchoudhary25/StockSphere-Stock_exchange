import { model } from "mongoose";

import  PositionSchema  from "../schemas/PositionSchema.js";

const PositionModel = new model("position" , PositionSchema);

export default PositionModel;