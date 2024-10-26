const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connection = require('./config/db');
const productRoutes = require('./routes/ProductRoute')

const port = process.env.PORT || 5000;;
const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(port, () => {
    connection();
    console.log(`Server is running in ${port}`);
})
