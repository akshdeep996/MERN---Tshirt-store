require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");


// DB Connections
mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser:true,

}).then(() => {
    console.log("DB CONNECTED");
})
.catch(() => {
    console.log("DB got ERROR")
})


// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//My Routes

// This route will prefix every other route Eg. if /signout we have to give /api/signout
app.use("/api",authRoutes);

// PORT
const port = process.env.PORT || 8000;

app.listen(port,() => {

    console.log(`App is running at ${port}`);
});