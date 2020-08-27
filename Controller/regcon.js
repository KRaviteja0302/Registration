const Details= require('../Model/regmodel');

exports.create= function(req,res)
{
    const newRegi= new Details({

        first_name: req.body.firstname,

        last_name: req.body.lastname,
    
        email: req.body.email,
    
        mobile: req.body.mobile
    });

    newRegi.save(function(err,data){
        res.send(data);
    })
}

exports.getdetails= function(req,res)
{
    Details.find(function(err,data){
        res.send(data);
    })
}