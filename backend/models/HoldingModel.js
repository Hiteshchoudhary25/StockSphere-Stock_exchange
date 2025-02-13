// import { model } from "mongoose";

// import {HoldingSchema} from '../schemas/HoldingSchema';

// const HoldingModel = new model("holding" , HoldingSchema);

// module.exports = {HoldingModel};

import { model } from "mongoose";
import HoldingSchema from "../schemas/HoldingSchema.js";

const HoldingModel = model("holding", HoldingSchema);

export default HoldingModel;
