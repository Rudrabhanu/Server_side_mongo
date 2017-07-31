/**
 * Created by Academy
 */
var Product = require('../models/Product');
var HttpStatus = require('http-status');
var Validation = require('./Validation');

//Your controller variable is defined here
var ProductController = require('./ProductController.js');

//use exec to run a shell script for example
// if you want to create a folder then you can run exec('mkdir folderpath', callback function) 
var exec = require('child_process').exec;

//User node-fs to create files in a given folderr
var fs = require('node-fs');

exports.saveProducts=function(){   
    Product.find({},function(err,product){       
        if(err)console.log(err);
        if(product.length === 0){
            console.log("no products");
        }
    }); 
}


//Implement the following functionalities

//save method to Save a new Product


//To set a default image for a new product implement and call
//saveProductImg to Save a default image for it
//default image: ./public/images/product.png
//create a folder in the path ./public/images/Product
//in the new folder create the image with 
//filename: _id+"_Product."+imageextension
//eg: if uploaded file is image.jpg for item with _id: abcdefghij
//then filename: abdefghij_Product.jpg 

//list method to List all products in db

//fetchProductImg method to Fetch the productImage of a given product

//saveProducts method to seed the database with initial data

//Implemenet the saveOrder method here
//Include the Order Schema into this controller
//Save the incoming order to the Order collection
