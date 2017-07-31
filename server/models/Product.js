/**
 * Created by Academy
 */
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ProductSchema = new Schema({
    Name:{type: String,unique: true},
    Category:{type: String,unique: true},
    Description:{type: String,unique: true},
    Price:{type: String,unique: true},
    productImg:{filePath: {type: String,unique: true}}    
})

var uniqueValidator = require('mongoose-unique-validator');
ProductSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

//Define your product schema here
//Attributes to be Created
//Name - name of the menu item
//Category - cuisine to which the menu belongs to
//Description - a short description of the item
//Price - The price of the item
//productImg - filepath to the image
// 
//Use the mongoose-unique-validator plugin to validate for uniqueness
//
