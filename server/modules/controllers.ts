import Chocolate from './repository';


let chocolateIsEmpty = obj => {
    let arr = [obj.nome,obj.tipo,obj.foto,obj.pais];
    return arr.some(prop => prop === "");
}

class ChocolateController {
    constructor(){}

    getAll(){
        return Chocolate.find({});
    }

    getById(id){
        return Chocolate.findById(id);
    }

    create(chocolate){
        if(!chocolateIsEmpty(chocolate)){
            return Chocolate.create(chocolate);
        }
    }

    update(id,chocolate){
        let { nome,tipo,pais,foto } = chocolate;
        let updateChoco = {nome,tipo,pais,foto};
        return Chocolate.findByIdAndUpdate(id,updateChoco);
    }

    delete(id){
        return Chocolate.remove(id);
    }
}

export default new ChocolateController;