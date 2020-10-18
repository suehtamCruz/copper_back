import express from 'express';

const app = express();
import  mongoose from 'mongoose'
const connection = mongoose.connect('mongodb+srv://matheus:matheus@copper.rfczh.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true});

app.listen(3003);
app.use(express.json());

app.get('/',(request , response) => { 
    return response.send("matheus");
});