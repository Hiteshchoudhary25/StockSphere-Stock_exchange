import { model } from "mongoose";

import { PositionSchema } from "../schemas/PositionSchema";

const PositionModel = new model("position" , PositionModel);

module.exports = {PositionModel};