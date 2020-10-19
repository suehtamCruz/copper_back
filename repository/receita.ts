import Receitas from '../models/receitas';
const receitaSchema = Receitas.model('Receitas');


export async function find(){
    let data  = await receitaSchema.find();
    return data;
}   
export async function create(data:any){
    let receitaNew = new receitaSchema(data);
    await receitaNew.save();
}   
export async function update(id:number , data:any ){

}   
export async function del(id:number){

}   
