import express from 'express';
import cors from 'cors';
import http from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/',(_,res)=>{
    return res.send("hello");
});
const server = http.createServer(app);

server.listen(3000);