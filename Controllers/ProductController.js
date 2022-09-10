const db = require('../Models/index.js')

// import model
const Product = db.products
const Review = db.reviews

// 1. create product
const addProduct =  async (req,res)=>{

   let info = {
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
   }

}