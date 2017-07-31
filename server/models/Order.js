/**
 * Created by Academy
 */
var mongoose = require('mongoose');
Schema = mongoose.Schema;
var ItemSchema = {
    Name:{type: String ,unique: true},
    Price: {type:Number,unique: true},
    Description: {type: String,unique: true},
    Category: {type: String,default:'South Indian',unique: true},
    Quantity:  {type:Number,unique: true}
}

var OrderSchema = {
    Item:{
        type:[ItemSchema]
    }
}
var CheckoutDetailSchema = {
    Name:{type: String,unique: true},
    Address:{
        line1:{type: String ,unique: true},
        country: {type: String ,unique: true},
        state: {type: String ,unique: true},
        pinCode: {type: String ,unique: true}
    },
    total: {type:Number,unique: true},
    date: {type: Date, default: Date.now,unique: true}
}

var uniqueValidator = require('mongoose-unique-validator');
OrderSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
CheckoutDetailSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = {
    'Order':mongoose.model('Order', OrderSchema),
    'CheckoutDetails':mongoose.model('Order', CheckoutDetailSchema)
}

//Define your order schema here
