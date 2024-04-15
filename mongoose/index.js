const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/e-comm'

const main = async()=>{
    const db = await dbConnect();
    // console.log(db)
    const productSchema = new mongoose.Schema({
        name : String,
        brand : String,
        price : Number,
        category : String
    });

    // Creating Model in mongoose
    const ProductsModel = mongoose.model('products', productSchema);
    const data = new ProductsModel({
        name : 'Iphone 14',
        brand : 'Apple',
        price : 1000,
        category : 'Mobile'
    });
    data.save();

     const result = await ProductsModel.find();
     console.log(result)
}




const dbConnect = async()=>{
    try{
        const res = await mongoose.connect(url);
        console.log("Connected Successfully")
        return res;
    } catch (err){
        console.log('Database not connected due to '+ err)
    }
}

main()