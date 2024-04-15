const express = require('express')
const app = express();
const { dbConnect, dbDisconnect } = require('./config')
const productModel = require('./product')

app.use(express.json());

app.get('/:key', async (req, res) => {
    await dbConnect();
    const result = await productModel.find({
        $or: [
            { name: { $regex: req.params.key } },
            { brand: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    });
    res.send(result);

})


app.listen(4040);