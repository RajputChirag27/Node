const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`

// Create a file 

// fs.writeFileSync(filePath,'This is a file');

// Read a file 
fs.readFile(filePath, 'utf-8', (err,item)=>{
    console.log(item);
    if(err) console.log('Error Occurs')
})

// Append Content to a file or Update a file

// fs.appendFile(filePath, ' This is Chirag here!', (err)=>{
//     if(!err) console.log('File Updated Successfully')
// })


// Rename a file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log('File Name is Updated');
// })


// Delete a file
// fs.unlinkSync(`${dirPath}/fruit.txt`)