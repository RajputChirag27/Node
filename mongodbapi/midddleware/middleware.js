const express = require('express')
const app = express();

const middle = ()=>{
    app.use(express.json());
}

module.exports = middle;