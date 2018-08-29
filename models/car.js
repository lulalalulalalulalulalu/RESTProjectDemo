const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const updatedTimstamp = require('mongoose-updated_at');

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {collection: 'car'});

carSchema.plugin(updatedTimstamp);
carSchema.plugin(mongoosePaginate);

const Car = mongoose.model('car', carSchema);
module.exports = Car;




var arr = [
    {
        id: 1,
        prize: '601_30|605_60|700_50|601_100|608_30',
        weight: 2
    },
    {
        id: 2,
        prize: '602_30|607_70|602_100|607_50|609_60',
        weight: 8
    }
];