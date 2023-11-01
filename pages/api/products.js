import mongoose from "mongoose";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect();
    if(method === "GET"){
        if(req.query?.id){
            res.json(await Product.findOne({_id: req.query.id}));
        }else{
            res.json(await Product.find());
        }

    }
    if(method === "POST"){
        const {title, descriptions, price} = req.body;
        const productDoc = await Product.create({
            title, descriptions, price,
        })
        res.json(productDoc);
    }
    if(method === "PUT"){
        const {title, descriptions, price, _id} = req.body;
        await Product.updateOne({_id}, {title, descriptions, price});
        res.json(true);
    }
}