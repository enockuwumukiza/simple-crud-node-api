const Product  = require('../models/product.model.js');
const getProducts = async (req,res) =>{
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }
  catch(er){
    res.status(500).json({message:er.message})
  }
}

const getSingleProduct = async (req,res) =>{
  try{
    const {id, name} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
    console.log(`Product: ${product.name}`)
  }
  catch(e){
    res.status(500).json({message:e.message})
  }
}

const createProduct = async(req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }
  catch(er){
    res.status(500).json({message:er.message});
  }
}
const updateProduct = async (req,res) =>{
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);

    if(!product){
     return res.status(404).json({message:"Product Not Found"});
    }
    else{
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct)
    }
  }
  catch(e){
    res.status(500).json({message:e.message});
  }
}
const deleteProduct = async (req,res) =>{
  try{
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({message: "Product Was Nod Found"});
    }
    res.status(200).json({message:"Product was deleted successfully"})
  }
  catch(e){
    res.status(500).json({message:e.message})
  }
}
module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct


}
