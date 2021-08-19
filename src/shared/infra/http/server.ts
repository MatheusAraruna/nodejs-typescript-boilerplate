import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/',(_,res)=>{
    return res.send("hello");
})
app.listen(3000);