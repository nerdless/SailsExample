/**
 * DriverController
 *
 * @description :: Server-side logic for managing drivers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	findClosestDrivers:function(req, res)
	{
		
		var latitude = req.param('latitude');
		var longitude = req.param('longitude');
		var dist = 0.0015;
    //var latitude = 19.4413945;
    //var longitude = -99.1811955;
    //var latitude = 19.430685;
    //var longitude = -99.2008026;
		//var id = req.param('id');

		Driver.find()
        .exec(function(err,drivers){

          if(err)
            res.json({error:err});
          if(drivers === undefined)
            res.json({notFound:true});
          else{
            var i = 0;
            var j = drivers.length;

            while (i < j) {
              //if(true){            && i.longitude < longitude)
              if (drivers[i].latitude < latitude -dist || drivers[i].latitude > latitude + dist || drivers[i].longitude < longitude - dist && drivers[i].longitude > latitude + dist) {
                drivers.splice(i,1);
                j -= 1;
                i -= 1;
                //res.send("quitaste uno")
              }
              i +=1;
            }

            res.json(drivers);
          }
            
        });
	},

	hi: function (req, res) {
    return res.send("Hi there!");
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
	
};

