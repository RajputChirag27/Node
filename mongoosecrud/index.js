const mongoose = require('mongoose');

// Creating Connection and Schema and returning Model
const connection = async () => {
    const url = 'mongodb://localhost:27017/e-comm'
    const db = await mongoose.connect(url);
    // console.log(db)

    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    });
    // console.log(productSchema)
    const ProductModel = mongoose.model('products', productSchema);
    // console.log(ProductModel)
    return ProductModel;
}


// Inserting Data in Mongooose using DB
const saveinDb = async () => {
    const ProductModel = await connection();
    const data = new ProductModel({
        name: 'Galaxy S22',
        price: 80000,
        brand: 'Samsung',
        category: 'Mobile',
    })
    const result = await data.save();
    console.log(result)
}

// Updating Data in Mongooose using DB
const updateInDb = async () => {
    const ProductModel = await connection();
    const result = await ProductModel.updateOne(
        { name: 'Galaxy S22' },
        {
            $set: {
                name: 'Galaxy S22 Ultra',
                price: 100000,
            }
        }
    )
    console.log(result);
}

// Deleting Data in Mongoose using DB
const deleteinDb = async () => {
    const ProductModel = await connection();
    const result = await ProductModel.deleteOne({ name: 'Galaxy S22 Ultra' })
    console.log(result)
}

// Finding Data in DB using Mongoose

const findInDb = async () =>{
    const ProductModel = await connection();
    const result = await ProductModel.find();
    console.log(result)
}




findInDb()
// saveinDb()
// updateInDb()
// deleteinDb()