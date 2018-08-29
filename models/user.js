const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const updatedTimstamp = require('mongoose-updated_at');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
},{collection: 'user'});

userSchema.plugin(updatedTimstamp);
userSchema.plugin(mongoosePaginate);

const User = mongoose.model('user', userSchema);
module.exports = User;