import * as mongoose from 'mongoose';
import ChocolateSchema from './schema';

export default mongoose.model('Chocolate',ChocolateSchema,'chocolates');
