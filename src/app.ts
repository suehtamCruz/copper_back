import express from 'express';

const app = express();
import  mongoose from 'mongoose';

const connection = mongoose.connect('mongodb+srv://matheus:matheus@copper.rfczh.mongodb.net/receitas_db?retryWrites=true&w=majority',{useNewUrlParser: true ,useUnifiedTopology: true });

if(connection){
    console.log("API CONECTADA AO BANCO");
}

app.listen(3003);
app.use(express.json());

app.get('/',(request , response) => { 
    
});