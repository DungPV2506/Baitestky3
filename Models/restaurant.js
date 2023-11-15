import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema();

const RestaurantModel = mongoose.model('restaurant', restaurantSchema);

export default RestaurantModel;