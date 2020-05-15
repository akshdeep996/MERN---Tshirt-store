const express = require("express");

const app = express()

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const port = 8000

app.get("/", (req,res) => {
    
    return res.send("Home page");

});

const admin = (req,res) => {
    return res.send("This is admin");
};

const isAdmin = (req,res,next) => {
    return res.send("This user is admin");
    next()
};

const isLoggedin = (req,res,next) => {
    return res.send("Sahi bandha he ! Andar lelo");
    next()
}

app.get("/admin",isLoggedin, isAdmin, admin);

app.get("/login", (req,res) => {
    
    return res.send("You are visiting a login route");

});

app.get("/akshdeep", (req,res) => {
    return res.send("Akshdeep is best . He finishes what he starts.")
})

app.get("/signup", (req,res) => {
    return res.send("AAiye padhariye !!!")
})


app.get("/signout", (req,res) => {
    return res.send("Pehli fursat me nikal koi jarurat nhi he teri.")
})

app.listen(port, () => console.log("Server is Up and running..."));