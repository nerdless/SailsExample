/**
* Driver.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
        type:"string", 
        required:true,
        minLength: 2
      },
      email:{
        type:"email",
        required:true,
        unique: true
      },
      aviable:{
      	type:"boolean",
      	defaultsTo: false

      },
      latitude:{
      	type:"float",
      	defaultsTo: 19.4328044
      },
      longitude:{
      	type:"float",
      	defaultsTo: -99.1332479
      }


  }
};

