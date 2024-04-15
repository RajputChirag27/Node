const express = require('express')
const app = express();
const { dbConnect, dbDisconnect } = require('./config');
const productModel = require('./product')


// MiddleWare for Interacting with JSON
app.use(express.json());



// Viewing Data using Get API
app.get('/', async (req, res) => {
    // Connecting to db
    await dbConnect();

    // Fetching Data 
    const data = await findData();

    // console.log(data)

    // Sending Data 
    res.send([data]);

    // Disconnecting the DB 
    await dbDisconnect()
})




// Inserting Data using Post API
app.post('/', async (req, res) => {

    // Connecting to the database
    await dbConnect();

    // Inserting Data
    const data = await insertData(req);

    console.log(data)
    // Sending the Response Back
    res.send(data)

    // Disconnecting the DB
    await dbDisconnect()
})




// Editing Data using Put API
app.put('/:_id', async (req, res) => {
    // Connecting to Database
    await dbConnect();

    //Updating Data
    const data = await updateData(req);
    // console.log(data);

    //Sending Data
    res.send(data)
    
    // Disconnecting Db
    await dbDisconnect()
})




// Deleting Data using Deleting API
app.delete('/:_id', async (req, res) => {
    // Connecting Db
    await dbConnect();

    // Deleting Data
    const data = await deleteData(req);

    // Sending Data
    res.send(data);

    // Disconnecting Db
    await dbDisconnect()
})




// Helper Functions ........


// Read Data 
const findData = async () => {
    try {
        const data = await productModel.find();
        return data;
    } catch (error) {
        console.log(error)
    }
}

// Insert Data
const insertData = async (req) => {
    const data = new productModel(req.body)
    try {
        const result = await data.save();
        return result;
    } catch (error) {
        console.log(error)
    }

}


// Update Data 

const updateData = async (req) => {
    try {
        const result = productModel.updateOne(
            req.params,
            {
                $set: req.body
            }
        )
        return result
    } catch (error) {
        console.log(error)
    }
}


// Delete Data 

const deleteData = async (req) => {
    try {
        const result = productModel.deleteOne(req.params)
        return result;
    } catch (err) {
        console.log(err)
    }
}



app.listen(4040);