const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/product.route.js')

const app = express();
const Product = require('./models/product.model.js');
const password = "Allelujah?7ENOCHUWUMUKIZA850@777";
const encodedPassaword = encodeURIComponent(password).replace(/%20/g,'');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/products',router);





app.get('/', (req, res) => {
  res.send("Hello From Enoch Server");
});




mongoose.connect(`mongodb+srv://wwwenockuwumukiza:${encodedPassaword}@backenddb.xfficrc.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Backenddb`)
  .then(() => {
    console.log("Connected to database well");
  })
  .catch(err => {
    console.error(`Could not connect to database: ${err}`);
  });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
