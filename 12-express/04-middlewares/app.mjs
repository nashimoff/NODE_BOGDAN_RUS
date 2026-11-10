import express from "express";
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.use(express.json())

app.use((req, res, next) => {
    console.log(req)
    console.log(req.headers['content-type'])
    next()
})

app.use((req, res) => {
    console.log(req.body)
    return res.send("This is express server")
});

app.listen(5000, () => console.log("server is listening at port 5000"));
//
//
//////
///