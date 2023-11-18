const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongo = require("./connectdb");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(cors());
app.use(bodyParser.json());

const postsRouter = require("./Routes/posts");
const productRouter = require("./Routes/product");

//using routes as a middleware
app.use("/posts", postsRouter);
app.use("/product", productRouter);
//middleware

//Routes

//Database connection
connectToMongo();

//how to we start listening to the server
app.listen(8000);
