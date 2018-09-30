import * as mongoose from 'mongoose';

class DataBase {
    private DB_URI = "mongodb://localhost:27017/chocolate";
    private DB_CONNECTION;

    constructor(){ }

    createConnection(){
        if(process.env.NODE_ENV === "production"){
            mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});
            this.logger(process.env.MONGODB_URI);
        }else{
            mongoose.connect(this.DB_URI,{useNewUrlParser: true})
            this.logger(this.DB_URI);
        }
    }

    logger(uri){
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected',() => console.log(`Mongoose foi Iniciado`));
        this.DB_CONNECTION.on('error', err => console.error(`Erro na conexão ${err}`));
        this.DB_CONNECTION.on('disconnected',() => console.log(`Mongoose foi disconectado`));
    }

    closeConnection(message,callback){
        this.DB_CONNECTION.close(() => {
            console.log(`O mongoose foi desconectado por : ${message}`);
            callback();
        })
    }

}

export default DataBase;