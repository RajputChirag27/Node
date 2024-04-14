const express = require("express");
const dbConnect = require("./mongodb");

// Old Way

// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((item) => {
//       console.log(item);
//     });
// });

// Read the Data

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
