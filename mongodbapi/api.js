const express = require('express')
const app = express();
const { dbConnect, close } = require('./mongodb')
const mongo = require('mongodb');

// app.use(middle);
app.use(express.json());



// Get Method used for getting data
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    // console.log(data)
    res.send(data)
    await close()
})

// Post Method used for inserting data
app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await insertData(data, req);
    res.send(result)
    await close()
})

// Put Method used for updating data
app.put('/:name', async (req, res) => {
    // console.log(req.body)
    let data = await dbConnect();
    let result = await updateData(data, req);
    res.send(result)
    await close()
})

// Delete Method used for Deleting Data 

app.delete('/:id', async(req, res) =>{
    let data = await dbConnect();
    let result = await deleteData(data, req);
    res.send(result)
    await close()
})




// Inserting Data using POST API
const insertData = async (data, req) => {
    try {
        let result = await data.insertOne(req.body);
        return result;
    } catch (err) {
        console.log('Data not inserted due to ' + err)
    }

}


// Updating Data using PUT API
const updateData = async (data, req) => {
    try {
        let result = await data.updateOne(
            { name: req.params.name },
            { $set: req.body })
        return result;
    } catch (err) {
        console.log('Data not updated due to ' + err)
    }
}

// Deleting Data using DELETE Api

const deleteData = async (data, req) => {
    try {
        let result = await data.deleteOne({ _id: new mongo.ObjectId(req.params.id) })
        return result;
    } catch (err) {
        console.log('Data not Deleted due to ' + err)
    }
}


app.listen(4040);