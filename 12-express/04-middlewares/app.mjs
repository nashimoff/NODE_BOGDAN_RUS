import express from "express";
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.use(express.json())

app.use((req, res, next) => {
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded'){
        let data = ''
        req.on('data', (chunk) => data += chunk.toString())
        req.on('end', () => console.log(data))
    }
    
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

//