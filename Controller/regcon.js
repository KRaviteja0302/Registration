const Details= require('../Model/regmodel');

exports.create= function(req,res)
{
    const newregi= new Details({

        first_name: req.body.first_name,

        last_name: req.body.last_name,
    
        email: req.body.email
    });

    newregi.save(function(err,data){
        res.send(data);
        
    })
}

exports.getdetails= function(req,res)
{
    Details.find(function(err,data){
        res.send(data);
    })
}
