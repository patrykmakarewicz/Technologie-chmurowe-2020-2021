const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const http = require('http');

const port = 5000;
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})

const users = require('./router/api/users');
app.use("/api/users", users);

const list = require('./router/api/list');
app.use("/api/list", list);

app.get('/', (req, res) => {
    res.send('Project server up and running.');
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

//mongoDB connection
mongoose
    .connect(
        `mongodb://mymongo-service:27017/myappdb`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));