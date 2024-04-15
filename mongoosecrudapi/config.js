const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/e-comm'

// Database Connection 
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log('Database Connected Successfully')
        return conn;
    } catch (err) {
        console.log('Database not connected due to ' + err)
    }
}




// Disconnecting Database
const dbDisconnect = async () => {
    try {
        await mongoose.connection.close()
        console.log('Database disconnected Succesfully')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {dbConnect, dbDisconnect};
