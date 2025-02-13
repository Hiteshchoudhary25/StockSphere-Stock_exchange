import { model } from "mongoose";

import { OrderSchema } from "./models/OrderSchema";

const OrderModel = new model("order", OrderSchema);

export default Holding;