const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/e-comm';

const dbConnect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Database connected Successfully')
    } catch (err) {
        console.log(err)
    }
}

const dbDisconnect = async () => {
    try {
        await mongoose.connection.close();
        console.log('Database disconnected Successfully')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {dbConnect, dbDisconnect};


