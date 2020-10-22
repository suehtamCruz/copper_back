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
export async function findTag(tag:string){
    let tags =  await receitaSchema.findOne({
        tags : tag,
    });
    return tags;
}
export async function update(id:string , data:any ){
    let receita = await receitaSchema.findByIdAndUpdate(id, data);
    return receita;
}   
export async function del(id:string){
    const receita = await receitaSchema.findByIdAndRemove(id);
    return receita;
}   
