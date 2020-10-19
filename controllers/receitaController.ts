import { Request , Response}from 'express';
import {create , find , update , del} from '../repository/receita';
// title
// time
// porcoes
// ingredientes
// tags
export async function createReceita(request:Request,response:Response){
    try{
        await create({
            title : request.body.title,
            time : request.body.time,
            porcoes : request.body.porcoes,
            ingredientes : request.body.ingredientes,
            tags : request.body.tags,
        });
        return response.status(201).json({
            message :"RECEITA CRIADA COM SUCESSO!"
        });
    }catch(e){
        return response.status(500).json({
            message :"ERRO AO CRIAR A RECEITA",
            error : e,
        });
    }
}

export async function findAll(request:Request,response:Response){
    try{
        let data = await find();
        return response.status(200).json(data); 
    }catch(e){
        return response.status(500).json({
            message : "ERRO AO BUSCAR RECEITAS",
            error : e,
        });
    }
}

export async function findAndUpdate(request:Request,response:Response){
    try{
        let data = await update(request.params.id, request.body);
        return response.status(200).json({
            message: "RECEITA ATUALIZADA COM SUCESSO!",
        }); 
    }catch(e){
        return response.status(500).json({
            message : "ERRO AO FAZER O UPDATE NA RECEITA..",
            error: e,
        });
    }
}

export async function findAndRemove(request:Request,response:Response){
    try{
        await del(request.params.id);
        return response.status(200).json({
            message : "RECEITA DELETADA COM SUCESSO, NUNCA GOSTEI DELA MESMO..."
        });
    }catch(e){
        return response.status(500).json({
            message : "ERRO AO DELETAR ESTA RECEITA...",
            error : e,
        });
    }      
}