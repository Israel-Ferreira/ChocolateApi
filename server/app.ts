import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import ChocolateRoutes from './modules/routes';
import DataBase  from './config/db';


class App {
    public app : express.Application;
    private bodyParser;
    private morgan : morgan.Morgan;
    private database : DataBase;

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new DataBase();
        this.databaseConnection();
    }

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    databaseConnection(){
        this.database.createConnection();
    }

    closeDBConnection(message, callback){
        this.database.closeConnection(message,callback);
    }

    routes(){
        this.app.get("/",(req,res) => res.send({message: "Hello Everyone"}));
        this.app.get("/api/chocolate",ChocolateRoutes.getAll);
        this.app.get("/api/chocolate/:id",ChocolateRoutes.getById);
        this.app.post("/api/chocolate",ChocolateRoutes.createChocolate);
        this.app.put("/api/chocolate/:id",ChocolateRoutes.updateChocolate);
        this.app.delete("/api/chocolate/:id", ChocolateRoutes.deleteChocolate);
    }
}

export default new App();