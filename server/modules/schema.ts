import * as mongoose from 'mongoose';

const ChocolateSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    tipo: {type: String, required: true},
    pais: {type: String, required: true},
    foto: {type: String, required: true },
    createdAt: {type: Date, default: Date.now}
});


export default ChocolateSchema;