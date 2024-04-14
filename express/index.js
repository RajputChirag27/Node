const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");


// Setting  View Engine for Dynamic Pages 

app.set('view engine', 'ejs')


// app.get('', (req,res)=>{
//     res.send('Hello , this is ' + capitalizeFirstLetter(req.query.name)+ "<br>" +
//     `<a href="/about">About</a>`
//     )
//     console.log('Data sent by Browser ==>' +  req.query.name)
// })

// app.get('/about' , (req,res)=>{
//     res.send(`
//     <h2>This is about us page</h2>
//     <input type="text" placeholder="username">
//     <button type="button" href='/'>Click Me</button>
//     <br>
//     <a href="/">HomePage</a>
//     `)
// })

// app.get('/help' , (req,res)=>{
//     res.send(`
//     [
//         {
//             name : "Chirag",
//             age : 21,
//             sex : "Male"
//         },
//         {
//             name : "Anurag",
//             age : 21,
//             sex : "Male"
//         }
//     ]
//     `)
// })

// app.listen(4040);

// function capitalizeFirstLetter(string="user") {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//     }




// How to load Static Content with File Extensions 

// app.use(express.static(publicPath));
// app.listen(4040);


// How to load static content without file extensions

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/api", (req, res) => {
  res.sendFile(`${publicPath}/api.json`);
});

app.get("/profile", (req, res) => {
  const user = {
    name : 'Chirag',
    email: 'csr@test.com',
    city : 'Ahemadabad',
    skills : ['Html', 'Css', 'Bootstrap', 'Sql Server', 'Node']
  }
  res.render('profile', {user})
});


app.get('/login', (req,res)=>{
  res.render('login')
})


app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pagenotfound.html`);
});


app.listen(4040);

//
