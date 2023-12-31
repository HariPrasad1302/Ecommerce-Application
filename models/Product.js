import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    title: {type: String, required: true},
    descriptions: String,
    price: {type: Number, required: true},

});

export const Product = models.Product || model('Product', ProductSchema);