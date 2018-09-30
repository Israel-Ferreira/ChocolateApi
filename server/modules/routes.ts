import ChocolateController from './controllers';
import * as httpStatus from 'http-status';

const sendResponse = (res,statusCd,data) => res.status(statusCd).json({'result': data});

class ChocolateRoutes {
    constructor(){ }

    getAll(req,res){
        ChocolateController.getAll()
            .then(chocolate => sendResponse(res,httpStatus.OK,chocolate))
            .catch(err => console.error(`Erro: ${err}`));
    }

    getById(req,res){
        let { id } = req.params;
        if(!id){
            sendResponse(res,httpStatus.OK,"Chocolate não encontrado");
        }

        ChocolateController.getById(id)
            .then(choco => sendResponse(res,httpStatus.OK,choco))
            .catch(err => console.error(`Erro: ${err}`));
    }

    createChocolate(req,res){
        let chocolate = req.body;
        ChocolateController.create(chocolate)
            .then(choco => sendResponse(res,httpStatus.OK,"Chocolate Criado com Sucesso"))
            .catch(err => console.error(`Erro: ${err}`));
    }

    updateChocolate(req,res){
        let { id } = req.params;
        let chocolate = req.body;
        ChocolateController.update(id,chocolate)
            .then(chc => sendResponse(res,httpStatus.OK,"Chocolate Alterado Com Sucesso"))
            .catch(err => console.error(`Erro: ${err}`));
    }


    deleteChocolate(req,res){
        let { id } =  req.params;
        ChocolateController.delete(id)
            .then(reslt => sendResponse(res,httpStatus.OK,reslt))
            .catch(err => console.error(`Erro: ${err}`));
    }

}


export default new ChocolateRoutes;