/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	findUserbyEmail:function(req,res)
  {
    var id = req.param('id');
    User.findOne({email:id})
        .exec(function(err,user){

          if(err)
            res.json({error:err});
          if(user === undefined)
            res.json({notFound:true});
          else
            res.json({notFound:false,userData:user});
        });
  },
	
	findUserbyNumber:function(req,res)
  {
    var id = req.param('id');
    User.findOne({empnum:id})
        .exec(function(err,user){

          if(err)
            res.json({error:err});
          if(user === undefined)
            res.json({notFound:true});
          else
            res.json({notFound:false,userData:user});
        });
  }
};

