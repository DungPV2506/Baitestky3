import mongoose from "mongoose";
const warehouseSchema = new mongoose.Schema();

const WarehouseModle = mongoose.model('warehouse',warehouseSchema);

export default WarehouseModle;