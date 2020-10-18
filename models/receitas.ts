import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaReceita = new Schema({
    title : {
        required:true,
        type:String,
        
    },
    time:{
        required:true,
        type:String,
    },
    porcoes : {
        required:true,
        type:Number,
    },
    ingredientes : [{
        required : true,
        type:String,
    }],
    tags:[{
        type : String,
        required:true,
    }]

});

export default mongoose.model('Receitas',schemaReceita);